const AWS = require('aws-sdk')

class cloudfront {
  /**
   * constructor
   *
   **/
  constructor () {
    this.cloudfront = new AWS.CloudFront()
  }
  /**
   * Get CloudFront Distribution
   *
   * @param {string} distributionId - CloudFront Distribution ID
   * @return {Promise} result of cloudfront.getDistribution api
   **/
  getCloudFrontDistribution (distributionId) {
    const param = {
      Id: distributionId
    }
    return this.cloudfront.getDistribution(param).promise()
  }
  /**
   * update CloudFront distribution config
   *
   * @param {object} params - update params
   * @return {Promise} result of cloudfront.updateDistribution api
   **/
  updateDistribution (params) {
    return cloudfront.updateDistribution(params).promise()
  }
}

module.exports = cloudfront