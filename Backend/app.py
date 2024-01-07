from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
import re
import os

app = Flask(__name__)

# Get the absolute path to the directory containing the script
base_path = os.path.dirname(os.path.abspath(__file__))

# Specify the absolute path to the CSV file
csv_file_path1 = os.path.join(base_path, 'False.csv')
csv_file_path2 = os.path.join(base_path, 'Truth.csv')

data_fake = pd.read_csv(csv_file_path1, encoding='unicode_escape')
data_true = pd.read_csv(csv_file_path2, encoding='unicode_escape')
data_fake.head()
data_true.head()

data_fake["class"] = 0
data_true['class'] = 1

data_fake.shape, data_true.shape

data_fake_manual_testing = data_fake.tail(10)
for i in range(49, 49, -1):
    data_fake.drop([i], axis = 0, inplace = True)

data_true_manual_testing = data_true.tail(10)
for i in range(49,49, -1):
    data_true.drop([i], axis = 0, inplace = True)

data_fake_manual_testing['class'] = 0
data_true_manual_testing['class'] = 1
data_merge = pd.concat([data_fake, data_true], axis = 0)
data_merge.head(10)

data = data_merge.drop(['title', 'subject', 'date'], axis = 1)
data = data[data['text'].notna()]

def wordopt(text):
    text = text.lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub("\\W", " ", text)
    text = re.sub('https?://\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    return text

data['text'] = data['text'].apply(wordopt)

x = data['text']
y = data['class']


x_train, x_test, y_train, y_test = train_test_split(x,y, test_size=0.25)

vectorization = TfidfVectorizer()
xv_train = vectorization.fit_transform (x_train)
xv_test = vectorization.transform(x_test)

LR = LogisticRegression()
LR.fit(xv_train, y_train)

pred_lr = LR.predict(xv_test)
LR.score(xv_test, y_test)

DT = DecisionTreeClassifier()
DT.fit(xv_train, y_train)

pred_dt = DT.predict(xv_test)
DT.score(xv_test, y_test)

def output_label(n):
    if n == 0:
        return "Fake News"
    elif n == 1:
        return "Not A Fake News"
    
# Define a route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    news_text = data['news_text']

    # Manual testing function
    def manual_testing(news):
        news = {"test": [news]}
        new_def_test = pd.DataFrame(news)
        new_def_test['text'] = new_def_test["test"].apply(wordopt)
        new_x_test = new_def_test["text"]
        new_xv_test = vectorization.transform(new_x_test)
        pred_LR = LR.predict(new_xv_test)
        pred_DT = DT.predict(new_xv_test)

        return {
            'LR_Prediction': output_label(pred_LR[0]),
            'DT_Prediction': output_label(pred_DT[0])
        }

    result = manual_testing(news_text)
    return jsonify(result)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
