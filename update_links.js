const fs = require('fs');

let header = fs.readFileSync('js/components/AppHeader.js', 'utf8');

// Replace href="#" in the ticker with actual links to article.html
header = header.replace(/<a href="#" style="font-weight: 600;">Nasdaq 100/g, '<a href="article.html?id=autonomous-architectures" style="font-weight: 600;">Nasdaq 100');
header = header.replace(/<a href="#" style="font-weight: 600;">Stripe acquires/g, '<a href="article.html?id=the-pivot-to-hardware" style="font-weight: 600;">Stripe acquires');
header = header.replace(/<a href="#" style="font-weight: 600;">EU passes/g, '<a href="article.html?id=autonomous-architectures" style="font-weight: 600;">EU passes');
header = header.replace(/<a href="#" style="font-weight: 600;">Y Combinator/g, '<a href="article.html?id=the-pivot-to-hardware" style="font-weight: 600;">Y Combinator');
header = header.replace(/<a href="#" style="font-weight: 600;">OpenAI releases/g, '<a href="article.html?id=autonomous-architectures" style="font-weight: 600;">OpenAI releases');

fs.writeFileSync('js/components/AppHeader.js', header, 'utf8');

let articleHtml = fs.readFileSync('article.html', 'utf8');
articleHtml = articleHtml.replace(/<a href="#" class="group block relative top-0/g, '<a href="article.html?id=autonomous-architectures" class="group block relative top-0');
articleHtml = articleHtml.replace(/<a href="#" class="flex flex-col p-6 rounded-2xl/g, '<a href="article.html?id=the-pivot-to-hardware" class="flex flex-col p-6 rounded-2xl');
articleHtml = articleHtml.replace(/<a href="#" class="flex flex-col items-end text-right p-6 rounded-2xl/g, '<a href="article.html?id=autonomous-architectures" class="flex flex-col items-end text-right p-6 rounded-2xl');

fs.writeFileSync('article.html', articleHtml, 'utf8');
console.log('Links updated');
