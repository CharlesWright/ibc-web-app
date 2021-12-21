/**
 * Represents a song item.
 */
 export type Album = {
     
    /**
    * The song's partition key
    *
    * @type {string}
    * @memberof Song
    * @property PartitionKey
    * @example
    * "chariot-of-fire"
    */
   PartitionKey: string;

    /**
    * The menu item's unique identifier
    *
    * @type {string}
    * @memberof Song
    * @property RowKey
    * @example
    * "chariot-of-fire"
    */
   RowKey: string;
   
   /**
    * The menu item's unique identifier
    *
    * @type {string}
    * @memberof Song
    * @property Title
    * @example
    * "Chariot of Fire"
    */
   Title: string;
 
   /**
    * The menu item's name
    *
    * @type {string}
    * @memberof Song
    * @property Url
    * @example
    * "http://.../ChariotOfFire.mp3"
    */
   Url: string

   /**
    * The list of related song ids
    *
    * @type {string}
    * @memberof Song
    * @property SongList
    * @example
    * "[""chariot-of-fire"",""beep""]"
    */
   SongList: string;

   /**
    * The menu item's name
    *
    * @type {Array<string>}
    * @memberof Song
    * @property TrueSongList
    * @example
    * ["chariot-of-fire","beep"]
    */
    TrueSongList: Array<string>;
 
};