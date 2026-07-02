# Unfilter Story

## Before you start — install these two things

1. **Node.js** — download the LTS installer from https://nodejs.org and run it
2. **Docker Desktop** — download from https://www.docker.com/products/docker-desktop and run it

Once both are installed, follow the steps below.

---

## Step 1 — Clone the repository

Open a terminal and run:

```
git clone https://github.com/Unfilter-Story/unfilter-story-extension.git
```

This will download the project and create a folder called `unfilter-story-extension` on your computer.

---

## Step 2 — Open the project folder

Open **File Explorer** (Windows) or **Finder** (Mac) and navigate to where the `unfilter-story-extension` folder was created. It is usually inside your home folder or wherever you ran the clone command.

You should see files like `setup.bat`, `start.bat`, `docker-compose.yml` etc. inside it.

---

## Step 3 — First-time setup (run once)

**Windows:**
Inside the `unfilter-story-extension` folder, find the file called **`setup.bat`** and double-click it.

> A black terminal window will open and start installing everything automatically.
> At the end it will ask you to type in an email and password — this becomes your admin login.
> The window will say "Setup complete!" when it is done.

**Mac:**
Right-click anywhere inside the `unfilter-story-extension` folder → click **"New Terminal at Folder"** (or open Terminal and drag the folder into it), then run:

```
./setup.sh
```

> The same automatic setup will run in your terminal.

---

## Step 4 — Start the app (run every time)

**Windows:**
Inside the `unfilter-story-extension` folder, find the file called **`start.bat`** and double-click it.

> A terminal window will open showing logs from all three services.
> Wait about 10–20 seconds for everything to load, then open your browser.

**Mac:**
In a terminal pointed at the `unfilter-story-extension` folder, run:

```
./start.sh
```

Once running, open your browser and go to:

| What | URL |
|------|-----|
| CMS Admin panel | http://localhost:5173 |
| Public site | http://localhost:4321 |

To stop everything, click on the terminal window and press **Ctrl+C**.

---

## Something went wrong?

- **"Docker not found"** — make sure Docker Desktop is installed and open (it needs to be running in the background before you run anything)
- **"Node.js not found"** — install Node.js from https://nodejs.org (use the LTS version)
- **Database errors on first run** — wait a few extra seconds after Docker starts, then re-run `setup.bat` / `./setup.sh` — it safely skips steps that already completed
- **Port already in use** — another app is using port 3000, 5173, or 4321. Restart your computer and try again.
