#include <iostream>
#include <map>
#include <string>
using namespace std;

int getUniqueIngredients(string ingredients[], int size) {
    map<string, int> uniqueCount;
    for (int i = 0; i < size; i++) {
        string ingredient = ingredients[i];
        for (int j = 0; j < ingredients[i].length(); j++) {
            if ((ingredients[i][j] < 65) || ((ingredients[i][j] > 90) && (ingredients[i][j] < 97)) || (ingredients[i][j] > 122)) {
                ingredient.erase(ingredient.begin() + j);
            }
        }
        
        if (uniqueCount.find(ingredients[i]) == uniqueCount.end()) {
            uniqueCount[ingredients[i]] = 1;
        }
        else {
            uniqueCount[ingredients[i]] = uniqueCount[ingredients[i]] + 1;
        }
    }
    
    return uniqueCount.size();
}
