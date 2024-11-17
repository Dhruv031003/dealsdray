import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Login } from "../models/login.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefereshTokens = async (loginId) => {
  try {
    const login = await Login.findById(loginId);
    const accessToken = login.generateAccessToken();
    const refreshToken = login.generateRefreshToken();

    login.refreshToken = refreshToken;
    await login.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerLogin = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if ([userName, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const login = await Login.create({
    userName,password
  });

  const createdLogin = await Login.findById(login._id).select(
    "-password -refreshToken"
  );

  if (!createdLogin) {
    throw new ApiError(500, "Something went wrong while registering the login");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdLogin, "Login registered Successfully"));
});

const loginLogin = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  if (!userName) {
    throw new ApiError(400, "User Name is required");
  }
  const login = await Login.findOne({ userName: userName });

  if (!login) {
    throw new ApiError(404, "Login does not exist");
  }

  const isPasswordValid = await login.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid login credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    login._id
  );

  const loggedInLogin = await Login.findById(login._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          login: loggedInLogin,
          accessToken,
          refreshToken,
        },
        "Login logged In Successfully"
      )
    );
});

const logoutLogin = asyncHandler(async (req, res) => {
  await Login.findByIdAndUpdate(
    req.login._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Login logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const login = await Login.findById(decodedToken?._id);

    if (!login) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== login?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefereshTokens(login._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerLogin, loginLogin, logoutLogin, refreshAccessToken };
