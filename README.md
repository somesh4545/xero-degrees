# Grocery Basket Analysis Application

This project combines data analysis using Apriori algorithm with a frontend web application built with Next.js to demonstrate the application of association rules in an online grocery shopping context.

## Project Structure

The project is divided into two main components:

### 1. Data Analysis (Python Notebook)

The data analysis part of the project is located in the root directory. It includes a Python Jupyter Notebook that uses the Apriori algorithm to mine association rules from a dataset. The dataset used for this analysis can be downloaded from [Kaggle](https://www.kaggle.com/datasets/yasserh/instacart-online-grocery-basket-analysis-dataset). The primary purpose of this analysis is to discover rules that indicate which products are frequently purchased together.

### 2. Web Application (Next.js)

The web application part of the project is located in the "app" directory. It's a frontend application built with Next.js that showcases the practical application of the association rules. Users can add products to a virtual shopping cart, and the application will suggest related products based on the association rules discovered in the data analysis part.

## Setup Instructions

### Data Analysis (Python Notebook)

1. Download the dataset from the provided Kaggle link.

2. Open the Python notebook in your Jupyter environment.

3. Follow the instructions in the notebook to run the Apriori algorithm and discover association rules from the dataset.

### Web Application (Next.js)

1. Navigate to the "app" directory.

2. Install the required dependencies:

   ```bash
   npm install

3. Start the Next.js development server::

   ```bash
   npm run dev

4. Access the web application at http://localhost:3000 in your web browser.


## Usage
### Data Analysis
Run the Python notebook to discover association rules from the dataset.

Examine the results of the analysis, including discovered rules and relevant statistics.

### Web Application
Open the web application in your web browser (usually at http://localhost:3000).

Interact with the web application by adding products to the shopping cart.

Observe how the application suggests related products based on the association rules discovered in the data analysis.

### Contributing
Contributions are welcome. You can contribute by improving the data analysis, enhancing the web application, or providing better visualizations.


## Project Video
[![Watch the video](https://raw.githubusercontent.com/somesh4545/xero-degrees/main/content/xero-degres.mp4)]
