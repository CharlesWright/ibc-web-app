import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router';
import { PageTitle } from '../PageTitle';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReactAudioPlayer from 'react-audio-player';

export const PageContent = () => {
    const [pageContent, setPageContent] = useState<string>("")
    const [pageDescription, setPageDescription] = useState<string>("")
    const location = useLocation()
    const pageName = location.pathname.substring(1).replaceAll('/', '-')

    
    useEffect(() => {
        function getContentInfo(name: string) {
            axios({
                method: 'GET',
                url: `${process.env.REACT_APP_FUNCTION_APP}/api/table-content?id=${pageName}`
            }).then(response => {
                setPageDescription(response.data.Description)
            }).catch(error => {
                console.info(error.message)
            })
        };
        getContentInfo(pageName)
    },[pageName])

    useEffect(()=> {
        function getContent(name: string) {
            axios({
                method: 'GET',
                url: `${process.env.REACT_APP_FUNCTION_APP}/content/${pageName}.md`
            }).then(response => {
                setPageContent(response.data)
            })
        };
        getContent(pageName)
    }, [pageName])



    return (
        <>
            <PageTitle title={pageDescription} />                 
            <div>
                <ReactMarkdown 
                    plugins={[remarkGfm]} 
                    components={{audio: ({node, ...props}) => 
                        <ReactAudioPlayer src={props.src} controls autoPlay={false}/>}}>{pageContent}</ReactMarkdown>
            </div>
                        
        </>
    );
};