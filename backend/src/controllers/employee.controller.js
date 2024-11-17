import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Employee } from "../models/employee.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerEmployee = asyncHandler(async (req, res) => {
  const { name, email, designation, gender, course, mobile } = req.body;

  if (
    [name, email, designation, gender, course, mobile].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedEmployee = await Employee.findOne({email: email});

  if (existedEmployee) {
    throw new ApiError(
      409,
      "Employee with email or employeename already exists"
    );
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const employee = await Employee.create({
    avatar: avatarLocalPath,
    name,
    email,
    designation,
    gender,
    course,
    mobile,
  });

  const createdEmployee = await Employee.findById(employee._id).select(
    "-password -refreshToken"
  );

  if (!createdEmployee) {
    throw new ApiError(
      500,
      "Something went wrong while registering the employee"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createdEmployee, "Employee registered Successfully")
    );
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { name, email, designation, gender, course, mobile } = req.body;

  if (!fullName || !email) {
    throw new ApiError(400, "All fields are required");
  }

  const employee = await Employee.findByIdAndUpdate(
    req.employee?._id,
    {
      $set: {
        name,
        email,
        designation,
        gender,
        course,
        mobile,
      },
    },
    { new: true }
  ).select();

  return res
    .status(200)
    .json(
      new ApiResponse(200, employee, "Employee details updated successfully")
    );
});

const updateEmployeeAvatar = asyncHandler(async (req, res) => {
  const avatarLocalPath = req.file?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  const employee = await Employee.findByIdAndUpdate(
    req.employee?._id,
    {
      $set: {
        avatar: avatarLocalPath,
      },
    },
    { new: true }
  ).select();

  return res
    .status(200)
    .json(new ApiResponse(200, employee, "employee image updated successfully"));
});

export {
  registerEmployee,
  updateAccountDetails,
  updateEmployeeAvatar
};
