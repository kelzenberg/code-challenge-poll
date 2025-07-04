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

