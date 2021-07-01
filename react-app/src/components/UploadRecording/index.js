import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactMic } from 'react-mic';
import { ReactAudioPlayer } from 'react-audio-player';
import { uploadRecording } from '../../store/recording';
import './UploadRecording.css'

const UploadRecording = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [record, setRecord] = useState(false);
    const [recordingBlob, setRecordingBlob] = useState('');
    const [audioExists, setAudioExists] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [audio, setAudio] = useState('');

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
        formData.append('description', description);
        formData.append('audio', audio);
        formData.append('category', category);

        dispatch(uploadRecording(formData));
        history.push(`/users/${user.id}/recordings`);
    }

    return (
        <div>
            {/* <ReactMic
                record={record}
                className='audio'
                onStop={onStop}
                mimeType='audio/wav' // Upon researching react-mic, I came across this sandbox:
                // https://codesandbox.io/s/625fb?file=/src/App.js:926-946. In it, there was this mimetype.
                // Upon further research, I found that this tells the browser how it should set the mimetype
                // when it sends to a server, but it doesn't change the content from a blob to an actual .wav file.
                // I feel like this fits my needs at the moment, and will change if I find that it does not.
                // https://stackoverflow.com/questions/51368252/setting-blob-mime-type-to-wav-still-results-in-webm
            /> */}
            <label for='start-recording'>Start Recording</label>
            <button onClick={startRecording}
                    type='button'
                    name='start-recording'
                    className='audioBtn'
            >Start Recording
            </button>
            <label for='stop-recording'>Stop Recording</label>
            <button onClick={stopRecording}
                    type='button'
                    name='stop-recording'
                    className='audioBtn'
            >Stop Recording</button>

            {/* <ReactAudioPlayer
                src={recordingBlob}
                controls
                style={audioExists ? { display: 'block' } : { display: 'none' }}
            /> */}
            <label for='upload-recording'>Happy? Upload Recording</label>
            <button onClick={onUpload}
                    type='button'
                    name='upload-recording'
                    className='audioBtn'
            >Happy? Upload Recording</button>
            <label for='delete-recording'>Not Happy? Delete Recording</label>
            <button onClick={onDelete}
                    type='button'
                    name='delete-recording'
                    className='audioBtn'
                    style={audioExists ? { display: 'block' } : { display: 'none' }}
            >Not Happy? Delete Recording</button>
            <div>
                {formOpen &&
                    <form className='recording-input-form' onSubmit={onSubmit}>
                        <label for='title'>Title</label>
                        <input
                        type='text'
                        name='title'
                        className='recording-form-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <label for='description'>Description</label>
                        <input
                        type='text'
                        name='description'
                        className='recording-form-input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                        <label for='category'>Category</label>
                        <select
                        name='category'
                        className='recording-form-input'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value='ingredients'>Ingredients</option>
                            <option value='dog food'>Dog Food</option>
                            <option value='newspaper'>Newspaper</option>
                        </select>
                        <label for='submit-form'>Submit Recording</label>
                        <button type='submit' name='submit-form' className='audioBtn'>Submit</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default UploadRecording;
