import React from 'react';
import './CreatePost.css'
import { supabase } from '../client';

const CreatePost = () => {
    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({ title: post.title, author: post.author, description: post.description })
            .select();

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" /><br />
                <br />

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" /><br />
                <br />

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description">
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost;