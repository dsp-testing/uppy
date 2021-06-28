import ProgressBar = require('../')
import Uppy = require('@uppy/core')

{
 const uppy = new Uppy()
 uppy.use(ProgressBar, {
    replaceTargetContent: true,
    target: 'body',
    hideAfterFinish: true,
    fixed: true
 })
}
