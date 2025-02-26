const { execSync } = require("child_process");

const commitMessage = "Автоматический коммит: " + new Date().toLocaleString();

try {
  execSync("git add .");
  execSync(`git commit -m "${commitMessage}"`);
  execSync("git push origin main"); // Измени 'main' на нужную ветку
  console.log("Изменения отправлены в репозиторий.");
} catch (error) {
  console.error("Ошибка при выполнении Git-команд:", error.message);
}
