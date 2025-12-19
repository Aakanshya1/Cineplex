require("dotenv").config();
const {Sequelize, Op} = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const catchAsync = require("../utils/catchAsync");
const {User }= models;

