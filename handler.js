const AWS = require('aws-sdk');
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
require('dotenv').config();
 
// Initialize AWS clients
const sns = new AWS.SNS();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES({ region: process.env.REGION });