const express = require('express');
const app = express();
app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json([
    { id: 1, title: "Learn DevOps", completed: false },
    { id: 2, title: "Build Docker image", completed: false }
  ]);
});

app.get('/', (req, res) => {
  res.json({ message: "Welcome to DevOps Task Manager" });
});

// Export pour les tests
module.exports = app;

// Démarrage uniquement si fichier exécuté directement
if (require.main === module) {
  app.listen(3000, () => console.log("API running on port 3000"));
}