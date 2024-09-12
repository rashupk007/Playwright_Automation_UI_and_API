// const xlsx = require('xlsx')
import xlsx from 'xlsx';

class ExcelUtils {

    static getDataFromExcel(filePath, sheetName) {

        const workbook = xlsx.readFile(filePath)
        const sheet = workbook.Sheets[sheetName]
        const excelToJson = xlsx.utils.sheet_to_json(sheet)
        
        return excelToJson

    }

}

module.exports = {ExcelUtils}