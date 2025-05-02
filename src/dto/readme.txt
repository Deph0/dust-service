  /**
   * Star object.
   * @param {Number} world - The World Number of the Star.
   * @param {Number} tier - The tier of the Star.
   * @param {string} location - The location of the Star.
   * @param {string} foundBy - The finder of the Star.
   * @param {Date=} foundAt - The timestamp of when the Star was found (Defaults to a new {@link DateConstructor}).
   * @param {Date?} updatedAt - The timestamp of when the Star was last updated.
   * @param {Date?} calledAt - The timestamp of when the Star was called (released).
   * @param {Boolean=} backup
   */
  /**
   * World object. See Wiki page about {@link [Server](https://oldschool.runescape.wiki/w/Server)}
   * @param {Number} world - The World Number.
   * @param {Number | string[]} type - World Type, e.g. F2P, P2P, Leauges etc.
   * @param {string} address - Server address for the world.
   * @param {string} activity - World Activity.
   * @param {Number | string} location - The Country location of the world.
   * @param {Number} players - Current World Player Count.
   */