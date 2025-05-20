
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

const ShowRecipe = () => {

    const recipe = useSelector((state) => state.recipe);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg text-start prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  )
}

export default ShowRecipe