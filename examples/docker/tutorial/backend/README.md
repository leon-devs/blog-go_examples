# Cool Project Backend

This is the backend service for Cool Project, written in Go.

## Requirements

- A Unix-based system (Linux or macOS)
- Go version **1.24+**
- Git

## Installation & Setup

1. **Use a Unix-based system**

   This guide assumes you're using a Unix-based environment such as Linux or macOS.

    - On **macOS**, you can install Go and run the app natively.

    - On **Windows**, it's recommended to use [WSL2](https://learn.microsoft.com/en-us/windows/wsl/) to run the
      application in a Linux-compatible environment.


2. **Install Go**

   Follow the instructions on the [official Go website](https://golang.org/dl/) to install Go version **1.24**.

   Verify the installation:
   ```bash
   go version
   ```

3. **Clone the repository**

   Clone or copy this project into `/opt/leon_devs`:

   ```bash
   sudo mkdir -p /opt/leon_devs
   sudo chown -R $(whoami):$(id -gn) /opt/leon_devs
   git clone git@github.com:leon-devs/blog-go_examples.git /opt/leon_devs/blog-go_examples
   ```

4. **Set environment variables**

   You must define the following environment variables:

   ```bash
   export ENVIRONMENT=production
   export HTTP_SERVER_PORT=8080
   export MONGODB_URL=mongodb://localhost:27017
   
   ```

5. **Run the application**

   Navigate to the source directory and run:

   ```bash
   cd /opt/leon_devs/blog-go_examples/examples/docker/tutorial/backend
   go run cmd/app/main.go
   
   ```

   The backend server should now be running on port `8080`.

---

## Dependencies

This application requires a running `MongoDB` instance accessible at:

```
mongodb://localhost:27017
```

Make sure `MongoDB` is installed and running before starting the backend.

---
