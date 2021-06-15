function btoa(str) {
    let buffer;
  
    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), "binary");
    }
    return buffer.toString("base64");
  }
  
function linkvertise(userid, link) {
    let base_url = `https://link-to.net/${userid}/${Math.random() * 1000}/dynamic`;
    let href = base_url + "?r=" + btoa(encodeURI(link));
    return href;
  }

module.exports = {
    btoa,
    linkvertise
}
