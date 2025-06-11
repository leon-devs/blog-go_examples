# Cool Project Frontend

This is the frontend service for Cool Project, built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and *
*shadcn-ui**.

---

## Requirements

- A Unix-based system (Linux or macOS)
- Node.js version **18+**
- npm (comes with Node.js)
- Git

---

## Installation & Setup

1. **Use a Unix-based system**

   This guide assumes you're using a Unix-based environment such as Linux or macOS.

    - On **macOS**, you can install Node.js using a version manager like [nvm](https://github.com/nvm-sh/nvm).

    - On **Windows**, it's recommended to use [WSL2](https://learn.microsoft.com/en-us/windows/wsl/) to run the
      application in a Linux-compatible environment.

2. **Install Node.js**

   Use [nvm](https://github.com/nvm-sh/nvm) to install the required Node.js version:

   ```bash
   nvm install 18
   nvm use 18
   ```

   Verify the installation:
   ```bash
   node -v
   npm -v
   ```

3. **Clone the repository**

   Clone or copy this project into `/opt/leon_devs`:

   ```bash
   sudo mkdir -p /opt/leon_devs
   sudo chown -R $(whoami):$(id -gn) /opt/leon_devs
   git clone git@github.com:leon-devs/blog-go_examples.git /opt/leon_devs/blog-go_examples
   ```

4. **Set environment variables**

   You must define the following environment variable to configure the backend API:

   ```bash
   export VITE_BACKEND_PING_URL=http://localhost:8080/ping
   ```

   This variable is used in the frontend code like this:

   ```ts
   const backendUrl = import.meta.env.VITE_BACKEND_PING_URL || 'http://localhost:8080/ping';
   ```

5. **Run the application**

   Navigate to the frontend source directory and run:

   ```bash
   cd /opt/leon_devs/blog-go_examples/examples/docker/tutorial/frontend
   npm install
   npm run dev
   ```

   The development server should now be running and accessible at [http://localhost:8081](http://localhost:8081)

---

## Notes

Make sure the backend service is running and accessible at the defined `VITE_BACKEND_PING_URL` before starting the
frontend.
