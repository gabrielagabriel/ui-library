import './stories.css'

${files.map(file => "import '" + file + "'").join('\n')}
