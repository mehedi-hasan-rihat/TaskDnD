<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Task Management Application</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 font-sans text-gray-800">
    <div class="container mx-auto p-6">
        <header class="text-center mb-8">
            <h1 class="text-4xl font-bold text-blue-600">Task Management Application</h1>
            <p class="text-lg text-gray-600 mt-2">A task management app where users can add, edit, delete, reorder, and move tasks between categories with a drag-and-drop interface. Built with React, Express, MongoDB, and Firebase Authentication.</p>
        </header>

        <section id="live-links" class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Live Links</h2>
            <ul class="list-disc ml-8 mt-2">
                <li><a href="https://your-frontend-link.com" class="text-blue-500" target="_blank">Live Frontend Link</a></li>
                <li><a href="https://your-backend-link.com" class="text-blue-500" target="_blank">Live Backend Link</a></li>
            </ul>
        </section>

        <section id="description" class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Description</h2>
            <p class="mt-2">This application allows users to manage their tasks. Users can add tasks, categorize them (To-Do, In Progress, Done), and reorder tasks through a drag-and-drop interface. Tasks are stored in MongoDB, and real-time updates are handled to keep data in sync.</p>
        </section>

        <section id="dependencies" class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Dependencies</h2>
            <ul class="list-disc ml-8 mt-2">
                <li>React</li>
                <li>React-DnD</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Firebase Authentication</li>
                <li>TailwindCSS</li>
                <li>Axios</li>
                <li>Toastify</li>
            </ul>
        </section>

        <section id="installation" class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Installation Steps</h2>
            <ol class="list-decimal ml-8 mt-2">
                <li>Clone the repository: <code>git clone https://github.com/your-username/repository-name.git</code></li>
                <li>Navigate to the project directory: <code>cd repository-name</code></li>
                <li>Install frontend dependencies: <code>cd frontend && npm install</code></li>
                <li>Install backend dependencies: <code>cd backend && npm install</code></li>
                <li>Set up environment variables in both the frontend and backend</li>
                <li>Start the frontend: <code>npm start</code></li>
                <li>Start the backend: <code>npm run dev</code></li>
            </ol>
        </section>

        <section id="technologies-used" class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-600">Technologies Used</h2>
            <ul class="list-disc ml-8 mt-2">
                <li>Frontend: React, TailwindCSS, Axios</li>
                <li>Backend: Express.js, MongoDB</li>
                <li>Authentication: Firebase Authentication</li>
                <li>Real-time: WebSockets (or similar real-time technologies)</li>
            </ul>
        </section>

        <footer class="text-center mt-10">
            <p class="text-gray-600">© 2025 Task Management Application. All Rights Reserved.</p>
        </footer>
    </div>
</body>
</html>
