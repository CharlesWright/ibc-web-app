import { Card, CardContent, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { AlbumContext } from "../../../contexts/AlbumContext";
import { Album } from "../../../types/Album";
import { Song } from "../../../types/Song";


var cardStyle = {
    display: 'block',
    margin: 5,
    width: '30vw',
    transitionDuration: '0.3s',
    height: '12vw',
    transform: "rotate(0deg)",
    marginLeft: "auto"
}


interface AudioCardProps {
    song: Song
}

export default function AudioCard(props: AudioCardProps) {
    const song = props.song
    const albumContext = useContext(AlbumContext)
    const [album, setAlbum] = useState<Album>()
    const [checked, setChecked] = useState(false);

    function findAlbum() {

        const albums = albumContext.albums
        albums.every(album => {
            let songList = album.TrueSongList
            let songId = songList.find(s => s === song.RowKey)
            if (songId) {
                setAlbum(album)
                return false
            }
            return true
        })
    }

    useEffect(() => {
        findAlbum()
    })

    function handleChange() {
        setChecked((prev) => !prev)
    }

    return (
        <Card variant="outlined" style={cardStyle} id={song.RowKey}>
            <CardContent>
                <Typography variant="h6" color="orange" gutterBottom>{song.Title}</Typography>

                <ReactAudioPlayer
                    src={`${process.env.REACT_APP_FUNCTION_APP}/api/media/audio/${song.Url}`}
                    autoPlay={false}
                    controls
                    preload="none"
                    title={song.Title}
                />
            </CardContent>            
        </Card >
    )
}