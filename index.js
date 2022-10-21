const root = document.querySelector('#root');

/*
Зробити таку структуру
<article>
    <h1>Header</h1>
    <p>TEXT</p>
</article>

І відобразити на екрані, маючи в html тільки 
<div id="root">
 (ОСЬ ТУТ))
</div> 
*/

const article = document.createElement('article');
const h1 = document.createElement('h1');
const p = document.createElement('p');

h1.append('Header');
p.append('TEXT');

article.append(h1, p);

root.append(article);