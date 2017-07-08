module.exports = MiddlewareBase => class Cors extends MiddlewareBase {
  description () {
    return 'Support for adding Cross-Origin Resource Sharing (CORS) headers.'
  }
  optionDefinitions () {
    return [
      {
        name: 'cors.origin',
        description: 'Access-Control-Allow-Origin value. Default is request Origin header.'
      },
      {
        name: 'cors.allow-methods',
        description: 'Access-Control-Allow-Methods value. Default is "GET,HEAD,PUT,POST,DELETE,PATCH"'
      },
    ]
  }
  middleware (options) {
    options = options || {}
    const corsOptions = {}
    if (options.corsOrigin) corsOptions.corsOrigin = options.corsOrigin
    if (options.corsAllowMethods) corsOptions.corsAllowMethods = options.corsAllowMethods
    this.emit('verbose', 'middleware.cors.config', corsOptions)
    const kcors = require('kcors')
    return kcors(corsOptions)
  }
}
