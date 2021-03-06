const getOutputPagePathByPage = (outputPath, pageName, projectName) => PATH.resolve(outputPath, `./${projectName}/${pageName}`)


module.exports = function (page) {
    const { name: pageName, parentProject } = page
    const { name: projectName } = parentProject

    const { outputPath } = Config
    const outputPagePath = getOutputPagePathByPage(outputPath, pageName, projectName)
    FS.ensureDirSync(outputPagePath)
}