import './App.css';
import PostsList from './features/posts/PostsList'; // Import with uppercase letter

import AddPostForm from './features/posts/AddPostForm';
function App() {
    return (
        <div className="App">
           <AddPostForm/>
            <PostsList /> {/* Use the correct name */}
           
        </div>
    );
}

export default App;
