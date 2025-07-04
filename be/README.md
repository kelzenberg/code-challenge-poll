# Backend

## Developing

### Running a FastAPI Project with `uv`

[uv](https://github.com/astral-sh/uv) is a fast Python package manager and runner. To run a FastAPI project using `uv`, follow these steps after installing uv:

```bash
    uv run fastapi run
    source .venv/bin/activate
```

## Code Challenge

### Found Issues

- FastAPI CORS middleware is not configured
  - Add CORS middleware to allow requests from the frontend
    - Use environment variables to configure allowed origins
    - Defaults to `development` environment
- Status codes are not used correctly
  - Use `HTTP_200_OK` for successful responses
  - Use `HTTP_404_NOT_FOUND` for not found errors
- Misleading Python typing imports (`Any`)

### Missed accomplishments/potential improvements

- Adding tests for the API endpoints etc.
- Use proper environment variable handling
- Use a proper logging library for monitoring
- Foreign input validation
  - Validate and sanitize incoming data
  - Ensure that all required fields are present and correctly typed
- Conceal database errors from API clients
- Increase HTTP server security
  - Enforce HTTPS in production
  - Implement authentication and authorization
  - Check for SQL injection vulnerabilities
- Check for deprecated or outdated libraries and their usage