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

    const categories = useSelector((state) => Object.values(state.category));
    // console.log(categories, 'CATEGORIES FROM UPLOAD RECORDING COMPONENT')

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
        setFormOpen(false);
    }
    const onUpload = () => {
        setFormOpen(!formOpen);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('title', title);
        // formData.append('description', description);
        // formData.append('category', category);

        formData.append('audio', recordingBlob);
        // console.log(recordingBlob, '************************************************blob')

        setAudioLoading(true);

        const res = await fetch('/api/recordings/new-audio', {
            method: "POST",
            body: formData
        });

        if(res.ok){
            let audio = await res.json();
            setAudioLoading(false);
            const recording = dispatch(uploadRecording(audio, title, description, category));

        } else {
            setAudioLoading(false);
        }

        setFormOpen(false);
        history.push(`/users/${user.id}`);
    }

    return (
        <div id='upload-page'>
            <div>
                <label htmlFor='recorder'></label>
                <ReactMic
                    record={record}
                    name='recorder'
                    className='audio-recorder'
                    onStop={onStop}
                    strokeColor='#6d9eeb'
                    backgroundColor='#ffffff'
                    className='audio-wave-bar'
                    mimeType='audio/webm'
                />
            </div>
            <div id='audio-buttons-container'>
                <div>
                    <label htmlFor='start-recording'></label>
                    <button onClick={startRecording}
                            type='button'
                            name='start-recording'
                            className='audioBtn'
                    >Start Recording
                    </button>
                </div>
                <div>
                    <label htmlFor='stop-recording'></label>
                    <button onClick={stopRecording}
                            type='button'
                            name='stop-recording'
                            className='audioBtn'
                    >Stop Recording
                    </button>
                </div>
            </div>
            <div id='audio-player'>
                <ReactAudioPlayer
                    src={recordingBlob.blobURL}
                    controls
                    style={audioExists ? { display: 'block' } : { display: 'none' }}
                />
            </div>
            <div id='upload-buttons-container'>
                <label htmlFor='upload-recording'></label>
                <button onClick={onUpload}
                        type='button'
                        name='upload-recording'
                        className='audioPlayerBtn'
                        style={audioExists ? { display: 'block' } : { display: 'none' }}
                >Upload Recording
                </button>
                <label htmlFor='delete-recording'></label>
                <button onClick={onDelete}
                        type='button'
                        name='delete-recording'
                        className='audioPlayerBtn'
                        style={audioExists ? { display: 'block' } : { display: 'none' }}
                >Delete Recording
                </button>
            </div>
            <div>
                {formOpen &&
                    <form className='audio-input-form' onSubmit={onSubmit}>
                        <div id='form-input-container-flex'>
                            <div id='audio-form-input-container'>
                                <label className='audio-form-labels' htmlFor='title'>Title</label>
                                <input
                                type='text'
                                name='title'
                                className='audio-form-input'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                                <label className='audio-form-labels' htmlFor='description'>Description</label>
                                <input
                                type='text'
                                name='description'
                                className='audio-form-input'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                />
                                <label className='audio-form-labels' htmlFor='category'></label>
                                <select
                                name='category'
                                onChange={(e) => setCategory(e.target.value)}
                                value={category.id}
                                >
                                    <option className='audio-form-labels' default>Choose A Category</option>Choose a Category
                                    {categories.map(category => (
                                        <option
                                        key={category.id}
                                        value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <label className='audio-form-labels' htmlFor='submit-button'></label>
                                <button className='audioPlayerBtn' type='submit' name='submit-button'>Submit Recording</button>
                            </div>
                        </div>
                        {audioLoading && <p> Loading...</p>}
                    </form>
                }
            </div>
        </div>
    )
}

export default UploadRecording;
