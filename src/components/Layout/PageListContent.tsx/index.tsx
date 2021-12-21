import { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageTitle } from '../../PageTitle';
import { Song } from '../../../types/Song';

export const SongListContent = () => {
    const [pageContent, setPageContent] = useState<string>("")
    const [pageDescription, setPageDescription] = useState<string>("")
    //const [itemList, setItemList] = useState<Array<Song>([])
    const location = useLocation()
    const pageName = location.pathname.substring(1).replaceAll('/', '-')

    
    useEffect(() => {
        function getContentInfo(name: string) {
            axios({
                method: 'GET',
                url: `http://localhost:7071/api/table-content?id=${pageName}`
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
                url: `http://localhost:7071/api/content?name=${pageName}.txt`
            }).then(response => {
                setPageContent(response.data)
            })
        };
        getContent(pageName)
    }, [pageName])

    useEffect(()=> {

    }, [])

    return (
        <>
            <PageTitle title={pageDescription} />                 
            <div>
                <ReactMarkdown plugins={[remarkGfm]}>{pageContent}</ReactMarkdown>
            </div>
                        
        </>
    );
};