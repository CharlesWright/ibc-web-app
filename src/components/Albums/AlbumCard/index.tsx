import { Card, CardContent, Collapse, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Album } from "../../../types/Album";
import { Song } from "../../../types/Song";

var cardStyle = {
    display: 'block',
    margin: 5,
    width: '30vw',
    transitionDuration: '0.3s',
    //height: '15vw'
}

interface AlbumCardProps {
    album: Album
    songs: Array<Song>
}

export default function AlbumCard(props: AlbumCardProps) {
    const album = props.album
    const songs = props.songs
    const albumSongList = album.TrueSongList
    const [albumSongs, setAlbumSongs] = useState<Array<Song>>([])
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        if (songs.length >= 0) {
            let albumSongs = songs.filter(song => albumSongList.includes(song.RowKey))
            setAlbumSongs(albumSongs)
        }
    }, [songs, albumSongList])


    function handleChange() {
        setChecked((prev) => !prev)
    }

    return (
        <Card variant="outlined" style={cardStyle} id={album.RowKey}>
            <CardContent>
                <Typography variant="h6" color="orange" gutterBottom>{album.Title}</Typography>
                <div><Typography>Show Track Names</Typography><Switch checked={checked} onChange={handleChange} /></div>
            </CardContent>
            <Collapse in={checked} timeout="auto" unmountOnExit>
                {albumSongs?.map((song) => {
                    return (
                        <Link to={`/the/songs#${song.RowKey}`}>
                            <Typography fontSize={12} color="orangered">{song.Title}</Typography>
                        </Link>)
                })}
            </Collapse>
        </Card >
    )
}