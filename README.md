**Koshur Printers**

**Description**
This is my friend's project who has a screen printing workshop and wants to sell hi stuff online. This is an E-Commerce project being built using
modern technologies like React, Node.js, Express, and MongoDB Atlas, this platform offers a secure, responsive, and user-friendly shopping experience.

**Key Features:**

**Role-Based System:** Efficiently manage operations with distinct roles for admins and users. Admins oversee the system, while users can browse and order products.

**Secure Transactions:** Utilize JWT authentication for secure access and rate limiting to protect against abuse.

**Password Management:** Easy password changing functionality ensures user accounts remain secure.

**Reliable Data Storage:** MongoDB Atlas guarantees your data is securely stored and easily accessible.

**User-Friendly Design:** Navigate through an intuitive interface designed to enhance your shopping experience.

**Responsive Layout:** Access our platform seamlessly across all devices, including desktops, tablets, and mobile phones.

**Scalable Infrastructure:** Built to handle a growing inventory and user base without compromising performance.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/username/KoshurPrinters.git
    ```
2. Navigate to the project directory:
    ```bash
    cd KoshurPrinters
    ```
3. Install server dependencies:
    ```bash
    cd server
    npm install
    ```
4. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    cd server
    npm start
    ```
2. Start the client:
    ```bash
    cd ../client
    npm start
    ```
3. Open your web browser and navigate to `http://localhost:3000` to start using the chat app.

## Configuration
1. **MongoDB Atlas**:
    - Set up a MongoDB Atlas account and create a new cluster.
    - Obtain your MongoDB connection string and update the `server/.env` file with the following:
        ```plaintext
        MONGODB_URI=your_mongodb_connection_string
        ```
        


