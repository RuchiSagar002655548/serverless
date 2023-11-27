const AWS = require('aws-sdk');
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
require('dotenv').config();
 
// Initialize AWS clients
const sns = new AWS.SNS();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES({ region: process.env.REGION });

exports.handler = async (event) => {
    const gcpServiceAccountKey = JSON.parse(process.env.GOOGLE_CREDENTIALS);
   
    // Parse SNS message
    const message = JSON.parse(event.Records[0].Sns.Message);
    const submissionUrl = message.submission_url;
    const email = message.email;
    const user_name = message.user_name;
    const user_id = message.user_id;
    const assign_id = message.assign_id;


}