const mimeToExtensions = {
  'audio/mp3': 'mp3',
  'audio/mp4': 'mp4',
  'audio/ogg': 'ogg',
  'audio/webm': 'webm',
  'image/gif': 'gif',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/svg+xml': 'svg',
  'video/mp4': 'mp4',
  'video/ogg': 'ogv',
  'video/quicktime': 'mov',
  'video/webm': 'webm',
  'video/x-matroska': 'mkv',
  'video/x-msvideo': 'avi',
}

module.exports = function getFileTypeExtension (mimeType) {
  // Remove the ; bit in 'video/x-matroska;codecs=avc1'
  mimeType = mimeType.replace(/;.*$/, '')
  return mimeToExtensions[mimeType] || null
}
