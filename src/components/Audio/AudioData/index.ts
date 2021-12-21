import { useState, useEffect, useRef } from 'react'
import jsmediatags from 'jsmediatags'


export default function useAudioData(props: any) {
  const id = props.id
  const source = props.source
  const [id3Data, setId3Data] = useState({ tags: [] })
  const [pictureData, setPictureData] = useState({ data: [] })

  useEffect(() => {
    const tagList = () => {
      new Promise((res, rej) => {
        new jsmediatags.Reader(props).read({
          onSuccess: (data: any) => {
            res(data)
          },
          onError: (error: any) => {
            rej(error)
          },
        })
      })
        .then(
          (data:any)  => (
            setId3Data(data.tags), setPictureData(data.tags.picture.data)
          ),
        )
        .catch(error => {
          console.log(error)
        })
    }

    const setId3 = () => tagList()
    id.current.addEventListener('loadeddata', setId3)

    return () => {
      id.current.removeEventListener('loadeddata', setId3Data)
    }
  }, [source, id])

  return {
    id3Data,
    pictureData,
  }
}
