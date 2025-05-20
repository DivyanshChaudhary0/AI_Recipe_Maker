
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'

const ShowRecipe = () => {

    const recipe = useSelector((state) => state.recipe);

  return (
    <div className='w-1/2 mx-auto text-start'>
        <ReactMarkdown>
            {recipe}
        </ReactMarkdown>
    </div>
  )
}

export default ShowRecipe