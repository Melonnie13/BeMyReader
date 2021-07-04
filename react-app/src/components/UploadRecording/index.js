import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactMic } from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';
import { uploadRecording } from '../../store/recording';
import './UploadRecording.css'
import { renderCategories } from '../../store/category';

const UploadRecording = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [record, setRecord] = useState(false);
    const [audioLoading, setAudioLoading] = useState(false);
    const [recordingBlob, setRecordingBlob] = useState('');
    const [audioExists, setAudioExists] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [audio, setAudio] = useState('');

    const categories = useSelector((state) => Object.values(state.category));

    useEffect(() => {
        dispatch(renderCategories())
    }, [dispatch])

    const startRecording = () => {
        setRecord(true);
    }
    const stopRecording = () => {
        setRecord(false);
    }
    const onStop = audio => {
        setRecordingBlob(audio)
        setAudioExists(true);
    }
    const onDelete = () => {
        setRecordingBlob('');
        setAudioExists(false);
    }
    const onUpload = () => {
        setFormOpen(!formOpen);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        // console.log(title, 'title from UploadRecording component')
        formData.append('description', description);
        // console.log(description, 'description from UploadRecording component')
        formData.append('audio', JSON.stringify(recordingBlob));
        // formData.append('audio', recordingBlob);

        // console.log('**********************recording blob from UploadRecording component', recordingBlob)

        formData.append('category', category);
        console.log(category, 'category from UploadRecording component')

        setAudioLoading(true);

        dispatch(uploadRecording(formData));
        setAudioLoading(false);
        setFormOpen(false)
        history.push(`/users/${user.id}`);
    }

    return (
        <div>
            <label htmlFor='recorder'></label>
            <ReactMic
                record={record}
                name='recorder'
                className='audio-recorder'
                onStop={onStop}
                backgroundColor='#6495ed'
                mimeType='audio/mpeg' // Upon researching react-mic, I came across this sandbox:
                // https://codesandbox.io/s/625fb?file=/src/App.js:926-946. In it, there was this mimetype.
                // Upon further research, I found that this tells the browser how it should set the mimetype
                // when it sends to a server, but it doesn't change the content from a blob to an actual .wav file.
                // I feel like this fits my needs at the moment, and will change if I find that it does not.
                // https://stackoverflow.com/questions/51368252/setting-blob-mime-type-to-wav-still-results-in-webm
            />
            <label htmlFor='start-recording'>Start Recording</label>
            <button onClick={startRecording}
                    type='button'
                    name='start-recording'
                    className='audioBtn'
            >Start Recording
            </button>
            <label htmlFor='stop-recording'>Stop Recording</label>
            <button onClick={stopRecording}
                    type='button'
                    name='stop-recording'
                    className='audioBtn'
            >Stop Recording</button>

            <ReactAudioPlayer
                src={recordingBlob.blobURL}
                controls
                style={audioExists ? { display: 'block' } : { display: 'none' }}
            />
            <label htmlFor='upload-recording'></label>
            <button onClick={onUpload}
                    type='button'
                    name='upload-recording'
                    className='audioBtn'
                    style={audioExists ? { display: 'block' } : { display: 'none' }}
            >Happy? Upload Recording</button>
            <label htmlFor='delete-recording'></label>
            <button onClick={onDelete}
                    type='button'
                    name='delete-recording'
                    className='audioBtn'
                    style={audioExists ? { display: 'block' } : { display: 'none' }}
            >Not Happy? Delete Recording</button>
            <div>
                {formOpen &&
                    <form className='recording-input-form' onSubmit={onSubmit}>
                        <label htmlFor='title'>Title</label>
                        <input
                        type='text'
                        name='title'
                        className='recording-form-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor='description'>Description</label>
                        <input
                        type='text'
                        name='description'
                        className='recording-form-input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                        <label htmlFor='category'>Choose A Category</label>
                        <select
                        name='category'
                        className='recording-form-input'
                        onChange={(e) => setCategory(e.target.value)}
                        value={category.id}
                        >
                            <option default>Choose A Category</option>Choose a Category
                            {categories.map(category => (
                                <option
                                key={category.id}
                                value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor='submit-button'>Submit Recording</label>
                        <button type='submit' name='submit-button' className='audioBtn'>Submit</button>
                        {audioLoading && <p> Loading...</p>}
                    </form>
                }
            </div>
        </div>
    )
}

export default UploadRecording;
