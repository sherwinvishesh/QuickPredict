from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('upload.html')

@app.route('/uploader', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    if file.filename == '':
        return 'No selected file'
    if file:
        df = pd.read_csv(file)
        return render_template('display.html', column_names=df.columns.values, row_data=list(df.values.tolist()))

if __name__ == '__main__':
    app.run(debug=True)
