import { saveAs } from "file-saver";
import * as docx from "docx";

export function generate(dane) {
    const doc = new docx.Document({
      sections: [
        {
          properties: {},
          children: [
            new docx.Paragraph({
              children: [
                new docx.TextRun("Hello World"),
                new docx.TextRun({
                  text: dane.name,
                  bold: true
                }),
                new docx.TextRun({
                  text: "\tGithub is the best",
                  bold: true
                })
              ]
            })
          ]
        }
      ]
    });
  
    docx.Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
  