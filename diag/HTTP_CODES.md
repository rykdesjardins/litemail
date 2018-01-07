# HTTP Codes
Most HTTP codes returned by the local proxy follow the [RFC7231](https://tools.ietf.org/html/rfc7231) 2014 revision definition. However some of them can be interpreted differently depending on the context they are exchanged.

## Success 

### 200
[GET] Requested entity was found and will be returned.

### 201
[POST] An email was sent, or something was created.

### 204
[POST] A request was processed, but nothing needs to be returned.

## Client errors

### 401
[POST] The request could not be handled because the provided username, password or token is / are invalid. 
[GET] The requested entity could not be returned because the current user does not have the rights to access it.

### 403
[POST / GET] User is not authorizes to request that endpoint / entity.

### 404
[POST] Something related to the request could not be found.
[GET] The requested entity does not exist.

## Server errors

### 500
[POST] Something crashed and the request will not be handled.

### 501
[POST] An endpoint does not support a certain action. This can happen for certain known mailers which don't support certain IMAP functionalities.

### 504
[POST] The request took too much time and was interrupted. 


