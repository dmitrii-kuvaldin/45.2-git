### lesson 1: git commands


ctrl+l - очистить консоль от предыдущих вызовов

git init - инициализация локального репозитория
git add . - индексация всех фалов в папке (кроме тех, что записаны в файле .gitignore)
git commit -m "<описание изменений в коммите>"
git log - просмотр истории коммитов

git branch -M main - переименовать текущую ветку в main (на случай если у вас master, main - новый стандарт)

git remote add origin <ссылка на ваш репозиторий> - команда привязки локального репозитория к выбранному удаленному
git push -u origin main - добавить файлы в удаленный репозиторий и сделать текущую ветку доступной для короткой команды 'git push'

git clone  <ssh ключ репозитория> - клонировать выбранный репозиторий (не забудьте что нужно будет перейти в созданную папку в vscode чтобы работать в ней в терминале)
git pull - подтянуть изменения с выбранной удаленной ветки