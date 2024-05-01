class HashMap {
  #array = [];

  hash(key) {
    let hashCode = 0;
    const hashMod = 16;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % hashMod;
  }

  set(key, value) {}
}

export default HashMap;
