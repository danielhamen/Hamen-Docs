const HamenAPI = {
    /**
     * Easily manipulate arrays
     */
    Arrays: {
        /**
         * Returns the index of the first occurrence of `value` in the `array`
         * between the `start` and `end` indices (if specified), or returns false if not found.
         * @param {Array} array - The input array.
         * @param {*} value - The value to be searched for.
         * @param {Number} [start=0] - The start index for the search.
         * @param {Number} [end=array.length] - The end index for the search.
         * @return {Number|Boolean} - Returns the index of the first occurrence of `value` in the `array`,
         * or false if not found.
         */
        index(array, value, start = 0, end = null) {
            if (end === null) {
                end = array.length
            }

            for (let i = start; i < end; i++) {
                const element = array[i];
                if (element === value) {
                    return i;
                }
            }

            return false;
        },

        /**
         * Inserts a value at a specified index in an array.
         * @param {Array} array - The array to which the value will be inserted.
         * @param {Number} index - The index at which the value will be inserted.
         * @param {*} value - The value to be inserted.
         * @return {Array|Boolean} - Returns the original array with the new value inserted,
         * or false if the index is greater than the length of the array.
         */
        insert(array, index, value) {
            if (index > array.length) {
                return false;
            }

            for (let i = array.length; i > index; i--) {
                array[i] = array[i - 1];
            }

            array[index] = value;

            return array;
        },

        /**
         * Returns the number of times a value occurs in an array.
         * @param {Array} array - The input array.
         * @param {*} value - The value to be counted.
         * @return {Number} - Returns the number of times the `value` occurs in the `array`.
         */
        count(array, value) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                if (element === value) {
                    count += 1;
                }
            }

            return count;
        },

        /**
         * Appends (inserts at the end) a value to an array.
         * @param {Array} array - The array to which the value will be appended.
         * @param {*} value - The value to be appended to the array.
         * @return {Array} - Returns the original array with the new value appended to the end.
         */
        append(array, value) {
            array[array.length] = value;
            return array;
        },

        /**
         * Clears (removes all elements from) an array.
         * @param {Array} array - The input array to be cleared.
         * @return {Array} - Returns the original array with all elements removed.
         */
        clear(array) {
            array.length = 0;
            return array;
        },

        /**
         * Returns a copy of an array.
         * @param {Array} array - The input array to be copied.
         * @return {Array} - Returns a copy of the input array.
         */
        copy(array) {
            return array.slice();
        },

        /**
         * Extends an array by adding all elements of another array to the end of it.
         * @param {Array} array - The input array to be extended.
         * @param {Array} anotherArray - The array to be added to the end of the input array.
         * @return {Array} - Returns the original array with all elements of the `anotherArray` added to the end.
         */
        extend(array, anotherArray) {
            for (let i = 0; i < anotherArray.length; i++) {
                array[array.length] = anotherArray[i];
            }

            return array;
        },

        /**
         * Removes and returns the last element of an array.
         * @param {Array} array - The input array from which the last element will be removed.
         * @return {*|undefined} - Returns the last element of the array, or `undefined` if the array is empty.
         */
        pop(array) {
            if (array.length === 0) {
                return undefined;
            }

            let last = array[array.length - 1];
            array.length--;
            return last;
        },

        /**
         * Removes the first occurrence of the input value from the input array and returns the updated array.
         * @param {Array} array - The array from which the value will be removed.
         * @param {*} value - The value to be removed from the array.
         * @return {Array} - Returns the original array with the specified value removed or false if the value was not found in the array.
         */
        remove(array, value) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    for (let j = i; j < array.length - 1; j++) {
                        array[j] = array[j + 1];
                    }

                    array.length--;
                    return array;
                }
            }

            return false;
        },

        /**
         * Reverses the elements of the input array and returns the reversed array.
         * @param {Array} array - The array to be reversed.
         * @return {Array} - Returns the reversed version of the input array.
         */
        reverse(array) {
            let left = 0;
            let right = array.length - 1;

            while (left < right) {
                let temp = array[left];
                array[left] = array[right];
                array[right] = temp;

                left++;
                right--;
            }

            return array;
        },

        /**
         * Sorts the input array and returns the sorted array
         * 
         * @param {any} key (optional) - a to extract a comparison key from each element in the array
         * @param {boolean} reverse (optional) - a boolean indicating whether the array should be sorted in descending order (default is false)
         */
        sort(array, key = null, reverse = false) {
            if (key === null) {
                if (reverse) {
                    array.sort((a, b) => b - a);
                } else {
                    array.sort((a, b) => a - b);
                }
            } else {
                if (reverse) {
                    array.sort((a, b) => key(b) - key(a));
                } else {
                    array.sort((a, b) => key(a) - key(b));
                }
            }

            return array;
        },

        /**
         * Prepends (inserts at the beginning) a value to an array.
         * @param {Array} array - The array to which the value will be prepended.
         * @param {*} value - The value to be prepended to the array.
         * @return {Array} - Returns the original array with the new value prepended to the start.
         */
        prepend(array, value) {
            array.unshift(value);
            return array;
        },

        /**
         * Returns a new array with all duplicates removed.
         * @param {Array} array - The array to remove duplicates from.
         * @return {Array} - Returns a new array with all duplicates removed.
         */
        unique(array) {
            return Array.from(new Set(array));
        },

        /**
         * Returns a one-dimensional array by flattening a nested array.
         * @param {Array} array - The array to be flattened.
         * @return {Array} - Returns a one-dimensional array.
         */
        flatten(array) {
            return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val), []);
        },

        /**
         * Rotates the elements of an array by a given number of positions.
         * @param {Array} array - The array to rotate the elements of.
         * @param {number} positions - The number of positions to rotate the elements by.
         * @return {Array} - Returns the original array with its elements rotated.
         */
        rotate(array, positions) {
            const copy = [...array];
            const shift = positions % array.length;
            if (shift < 0) {
                for (let i = 0; i < Math.abs(shift); i++) {
                    copy.unshift(copy.pop());
                }
            } else {
                for (let i = 0; i < shift; i++) {
                    copy.push(copy.shift());
                }
            }
            return copy;
        },

        /**
         * Removes whitespace from both ends of an array.
         * @param {Array} array - The array to remove whitespace from.
         * @return {Array} - Returns the original array with whitespace removed from both ends.
         */
        trim(array) {
            return array.map(val => val.trim());
        },

        /**
         * Returns a new array with all falsy values removed.
         * @param {Array} array - The array to remove falsy values from.
         * @return {Array} - Returns a new array with all falsy values removed.
         */
        compact(array) {
            return array.filter(Boolean);
        },

        /**
         * Groups elements of an array based on a given criteria.
         * @param {Array} array - The array to group elements from.
         * @param {function} fn - The criteria to group elements by.
         * @return {Object} - Returns an object with keys being the groups and values being arrays of elements belonging to that group.
         */
        groupBy(array, fn) {
            return array.reduce((acc, val) => {
                const key = fn(val);
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(val);
                return acc;
            }, {});
        },

        /**
         * Returns a count of elements grouped by a given criteria.
         * @param {Array} array - The array to count elements from.
         * @param {Function} criteria - The function that determines the criteria to group elements.
         * @return {Object} - The object with the count of elements grouped by the given criteria.
         */
        countBy(array, key) {
            return array.reduce((result, item) => {
                result[item[key]] = (result[item[key]] || 0) + 1;
                return result;
            }, {});
        },

        /**
         * Splits an array into two arrays based on a given criteria.
         * @param {Array} array - The array to split.
         * @param {Function} criteria - The function that determines the criteria to split elements.
         * @return {Array} - The array of two arrays split based on the given criteria.
         */
        partition(array, fn) {
            return array.reduce(
                (result, item) => {
                    result[fn(item) ? 0 : 1].push(item);
                    return result;
                },
                [[], []]
            );
        },

        /**
         * Returns the intersection of two or more arrays.
         * @param {Array} arrays - The arrays to find the intersection of.
         * @return {Array} - The array with the elements that exist in all given arrays.
         */
        intersection(...arrays) {
            return arrays.reduce((result, array) => {
                return result.filter(item => array.includes(item));
            });
        },

        /**
         * Returns the difference of two or more arrays.
         * @param {Array} arrays - The arrays to find the difference of.
         * @return {Array} - The array with the elements that exist in the first array but not in the rest.
         */
        difference(array, ...others) {
            const set = new Set(array);
            for (const other of others) {
                for (const item of other) {
                    set.delete(item);
                }
            }
            return [...set];
        },

        /**
         * Returns the symmetric difference of two or more arrays.
         * @param {...Array} arrays - The arrays to be compared and have the symmetric difference extracted from.
         * @return {Array} - The symmetric difference of the given arrays, i.e. the elements that appear in one or more of the arrays, but not in all.
         */
        symmetricDifference(array, ...others) {
            const result = new Set(array);
            for (const other of others) {
                for (const item of other) {
                    if (result.has(item)) {
                        result.delete(item);
                    } else {
                        result.add(item);
                    }
                }
            }
            return [...result];
        },

        /**
         * Returns the union of two or more arrays.
         * @param {...Array} arrays - The arrays to be combined into a union.
         * @return {Array} - The union of the given arrays, i.e. all unique elements from all of the arrays combined.
         */
        union(...arrays) {
            return [...new Set([].concat(...arrays))];
        },

        /**
         * Merges two or more arrays into one by alternating elements from each.
         * @param {...Array} arrays - The arrays to be merged.
         * @return {Array} - The merged array, alternating elements from each of the given arrays.
         */
        zip(...arrays) {
            const length = Math.min(...arrays.map(array => array.length));
            return Array.from({ length }, (_, index) => arrays.map(array => array[index]));
        },

        /**
         * Splits a merged array back into its original arrays.
         * @param {Array} mergedArray - The merged array to be split.
         * @return {Array[]} - An array of arrays, representing the original arrays that were merged.
         */
        unzip(array) {
            return array[0].map((_, index) => array.map(row => row[index]));
        },

        /**
         * Generates an array of numbers in a specified range.
         * @param {number} start - The starting number of the range.
         * @param {number} end - The ending number of the range.
         * @param {number} [step=1] - The size of each step to take in the range.
         * @return {Array} - An array of numbers within the specified range, separated by the given step size.
         */
        range(start, end, step = 1) {
            const length = Math.ceil((end - start) / step);
            return Array.from({ length }, (_, index) => start + index * step);
        },

        /**
         * Returns a random element from an array.
         * @param {Array} array - The array to select a random element from.
         * @return {*} - A random element from the given array.
         */
        random(array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        /**
         * Shuffles the elements of an array randomly.
         * @param {Array} array - The array to shuffle.
         * @return {Array} - Returns the shuffled array.
         */
        shuffle(array) {
            let currentIndex = array.length;
            let temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },

        /**
         * Returns a specified number of random elements from an array.
         * @param {Array} array - The array to get random elements from.
         * @param {number} [count=1] - The number of random elements to return.
         * @return {Array} - Returns an array with the specified number of random elements.
         */
        sample(array, count = 1) {
            const shuffled = shuffle(array.slice());
            return shuffled.slice(0, count);
        },

        /**
         * Sorts an array of objects based on a given property.
         * @param {Array} array - The array to sort.
         * @param {string} property - The property to sort by.
         * @param {boolean} [ascending=true] - Sort order, ascending (default) or descending.
         * @return {Array} - Returns the sorted array.
         */
        sortBy(array, property, ascending = true) {
            return array.sort((a, b) => {
                const x = a[property];
                const y = b[property];

                if (ascending) {
                    return x < y ? -1 : x > y ? 1 : 0;
                } else {
                    return x > y ? -1 : x < y ? 1 : 0;
                }
            });
        },

        /**
         * Returns the element with the minimum value of a given property.
         * @param {Array} array - The array to find the minimum in.
         * @param {string} property - The property to find the minimum value of.
         * @return {*} - Returns the element with the minimum value of the specified property.
         */
        minBy(array, property) {
            return sortBy(array, property)[0];
        },

        /**
         * Returns the element with the maximum value of a given property.
         * @param {Array} array - The array to find the maximum in.
         * @param {string} property - The property to find the maximum value of.
         * @return {*} - Returns the element with the maximum value of the specified property.
         */
        maxBy(array, property) {
            return sortBy(array, property, false)[0];
        },

        /**
         * Returns the sum of values of a given property for all elements.
         * @param {Array} array - The array to get the sum of.
         * @param {string} property - The property to sum.
         * @return {number} - Returns the sum of the specified property for all elements.
         */
        sumBy(array, property) {
            return array.reduce((sum, current) => sum + current[property], 0);
        },

        /**
         * Returns the average of values of a given property for all elements in an array of objects.
         * @param {Array} array - The array of objects to be processed.
         * @param {string} property - The property to extract the values from.
         * @return {number} - Returns the average of the values of the specified property.
         */
        averageBy(array, property) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i][property];
            }
            return sum / array.length;
        },

        /**
         * Applies a function to reduce elements from the right of an array to a single value.
         * @param {Array} array - The array to be processed.
         * @param {function} callback - The function to be applied to reduce the elements in the array.
         * @param {*} initialValue - The initial value to be passed to the function.
         * @return {*} - Returns the reduced value.
         */
        reduceRight(array, callback, initialValue) {
            let result = initialValue;
            for (let i = array.length - 1; i >= 0; i--) {
                result = callback(result, array[i]);
            }
            return result;
        },

        /**
         * Reverses the elements of an array.
         * @param {Array} array - The array to be reversed.
         * @return {Array} - Returns the reversed array.
         */
        reverse(array) {
            let reversedArray = [];
            for (let i = array.length - 1; i >= 0; i--) {
                reversedArray.push(array[i]);
            }
            return reversedArray;
        },

        /**
         * Splits an array into chunks of a specified size.
         * @param {Array} array - The array to be split into chunks.
         * @param {number} size - The size of each chunk.
         * @return {Array} - Returns an array of arrays, where each sub-array is a chunk of the original array.
         */
        chunk(array, size) {
            let chunks = [];
            for (let i = 0; i < array.length; i += size) {
                chunks.push(array.slice(i, i + size));
            }
            return chunks;
        },

        /**
         * Splits an array into slices of a specified size.
         * @param {Array} array - The array to be split into slices.
         * @param {number} size - The size of each slice.
         * @return {Array} - Returns an array of arrays, where each sub-array is a slice of the original array.
         */
        slices(array, size) {
            let slices = [];
            for (let i = 0; i < array.length; i += size) {
                slices.push(array.slice(i, i + size));
            }
            return slices;
        },

        /**
         * Filters objects in an array based on a given property and value.
         * @param {Array} array - The array of objects to be filtered.
         * @param {string} prop - The property to filter on.
         * @param {*} value - The value to match.
         * @return {Array} - Returns a new array with only the objects that have the specified property and value.
         */
        filterObjects(array, prop, value) {
            return array.filter(obj => obj[prop] === value);
        },

        /**
         * Maps objects in an array to a new array of objects based on a given property.
         * @param {Array} array - The array of objects to be mapped.
         * @param {string} prop - The property to map on.
         * @return {Array} - Returns a new array of objects with only the specified property.
         */
        mapObjects(array, prop) {
            return array.map(obj => obj[prop]);
        },

        /**
         * Returns an array of values of a specified property for all objects.
         * @param {Array} array - The array of objects.
         * @param {string} prop - The property to extract values from.
         * @return {Array} - Returns a new array with the values of the specified property.
         */
        pluck(array, prop) {
            return mapObjects(array, prop);
        },

        /**
         * Returns the first object in an array that matches a given criteria.
         * @param {Array} array - The array of objects to search.
         * @param {Object} criteria - An object with the properties and values to match.
         * @return {Object} - Returns the first object in the array that matches the criteria, or undefined if no match is found.
         */
        findWhere(array, criteria) {
            return array.find(obj => {
                return Object.entries(criteria).every(([key, value]) => obj[key] === value);
            });
        },

        /**
         * Returns all objects in an array that match a given criteria.
         * @param {Array} array - The array of objects to search.
         * @param {Object} criteria - An object with the properties and values to match.
         * @return {Array} - Returns a new array with all objects in the array that match the criteria.
         */
        where(array, criteria) {
            return array.filter(obj => {
                return Object.entries(criteria).every(([key, value]) => obj[key] === value);
            });
        }
    },

    /**
     * Easily convert between units:
     */
    Conversions: {
        Length: {
            Kilometers: {
                /**
                 * Converts kilometers to meters.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of meters.
                 */
                toMeters(kilometers) {
                    return kilometers * 1000;
                },
    
                /**
                 * Converts kilometers to centimeters.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of centimeters.
                 */
                toCentimeters(kilometers) {
                    return kilometers * 100000;
                },
    
                /**
                 * Converts kilometers to millimeters.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of millimeters.
                 */
                toMillimeters(kilometers) {
                    return kilometers * 1000000;
                },
    
                /**
                 * Converts kilometers to micrometers.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of micrometers.
                 */
                toMicrometers(kilometers) {
                    return kilometers * 1000000000;
                },
    
                /**
                 * Converts kilometers to nanometers.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of nanometers.
                 */
                toNanometers(kilometers) {
                    return kilometers * 1000000000000;
                },
    
                /**
                 * Converts kilometers to miles.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of miles.
                 */
                toMiles(kilometers) {
                    return kilometers * 0.621371;
                },
    
                /**
                 * Converts kilometers to yards.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of yards.
                 */
                toYards(kilometers) {
                    return kilometers * 1093.6132983;
                },
    
                /**
                 * Converts kilometers to feet.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of feet.
                 */
                toFeet(kilometers) {
                    return kilometers * 3280.839895;
                },
    
                /**
                 * Converts kilometers to inches.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of inches.
                 */
                toInches(kilometers) {
                    return kilometers * 39370.07874;
                },
    
                /**
                 * Converts kilometers to nautical miles.
                 * @param {number} kilometers - The number of kilometers to be converted.
                 * @return {number} - The equivalent number of nautical miles.
                 */
                toNauticalMiles(kilometers) {
                    return kilometers * 0.539957;
                }
            }, Meters: {
                /**
                 * Converts meters to kilometers.
                 * @param {number} meters - The number of meters to be converted.
                 * @return {number} - The equivalent number of kilometers.
                 */
                toKilometers(meters) {
                    return meters / 1000;
                },
    
                /**
                 * Converts meters to centimeters.
                 * @param {number} meters - The number of meters to be converted.
                 * @return {number} - The equivalent number of centimeters.
                 */
                toCentimeters(meters) {
                    return meters * 100;
                },
    
                /**
                 * Converts meters to millimeters.
                 * @param {number} meters - The number of meters to be converted.
                 * @return {number} - The equivalent number of millimeters.
                 */
                toMillimeters(meters) {
                    return meters * 1000;
                }
            }, Centimeters: {
                /**
                 * Converts centimeters to meters.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of meters.
                 */
                toMeters(centimeters) {
                    return centimeters / 100;
                },
    
                /**
                 * Converts centimeters to kilometers.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of kilometers.
                 */
                toKilometers(centimeters) {
                    return centimeters / 100000;
                },
    
                /**
                 * Converts centimeters to millimeters.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of millimeters.
                 */
                toMillimeters(centimeters) {
                    return centimeters * 10;
                },
    
                /**
                 * Converts centimeters to micrometers.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of micrometers.
                 */
                toMicrometers(centimeters) {
                    return centimeters * 10000;
                },
    
                /**
                 * Converts centimeters to nanometers.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of nanometers.
                 */
                toNanometers(centimeters) {
                    return centimeters * 10000000;
                },
    
                /**
                 * Converts centimeters to miles.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of miles.
                 */
                toMiles(centimeters) {
                    return centimeters / 160934.4;
                },
    
                /**
                 * Converts centimeters to yards.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of yards.
                 */
                toYards(centimeters) {
                    return centimeters / 91.44;
                },
    
                /**
                 * Converts centimeters to feet.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of feet.
                 */
                toFeet(centimeters) {
                    return centimeters / 30.48;
                },
    
                /**
                 * Converts centimeters to inches.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of inches.
                 */
                toInches(centimeters) {
                    return centimeters / 2.54;
                },
    
                /**
                 * Converts centimeters to nautical miles.
                 * @param {number} centimeters - The number of centimeters to be converted.
                 * @return {number} - The equivalent number of nautical miles.
                 */
                toNauticalMiles(centimeters) {
                    return centimeters / 185200;
                }
            }, Millimeters: {
                /**
                 * Converts millimeters to meters.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of meters.
                 */
                toMeters(millimeters) {
                    return millimeters / 1000;
                },
    
                /**
                 * Converts millimeters to kilometers.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of kilometers.
                 */
                toKilometers(millimeters) {
                    return millimeters / 1000000;
                },
    
                /**
                 * Converts millimeters to centimeters.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of centimeters.
                 */
                toCentimeters(millimeters) {
                    return millimeters / 10;
                },
    
                /**
                 * Converts millimeters to micrometers.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of micrometers.
                 */
                toMicrometers(millimeters) {
                    return millimeters * 1000;
                },
    
                /**
                 * Converts millimeters to nanometers.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of nanometers.
                 */
                toNanometers(millimeters) {
                    return millimeters * 1000000;
                },
    
                /**
                 * Converts millimeters to miles.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of miles.
                 */
                toMiles(millimeters) {
                    return millimeters * 0.0000006213711922;
                },
    
                /**
                 * Converts millimeters to yards.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of yards.
                 */
                toYards(millimeters) {
                    return millimeters * 0.001093613298337;
                },
    
                /**
                 * Converts millimeters to feet.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of feet.
                 */
                toFeet(millimeters) {
                    return millimeters * 0.003280839895013;
                },
    
                /**
                 * Converts millimeters to inches.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of inches.
                 */
                toInches(millimeters) {
                    return millimeters * 0.03937007874016;
                },
    
                /**
                 * Converts millimeters to nautical miles.
                 * @param {number} millimeters - The number of millimeters to be converted.
                 * @return {number} - The equivalent number of nautical miles.
                 */
                toNauticalMiles(millimeters) {
                    return millimeters / 1.852e+6;
                }
            }, Micrometers: {
                /**
                 * Converts Micrometers to Meters.
                 * @param {number} micrometers - The number of Micrometers to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(micrometers) {
                    return micrometers / 1000000;
                },
    
                /**
                 * Converts Micrometers to Kilometers.
                 * @param {number} micrometers - The number of Micrometers to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(micrometers) {
                    return micrometers / 1000000000;
                },
    
                /**
                 * Converts Micrometers to Centimeters.
                 * @param {number} micrometers - The number of Micrometers to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(micrometers) {
                    return micrometers / 10000;
                },
    
                /**
                 * Converts Micrometers to Millimeters.
                 * @param {number} micrometers - The number of Micrometers to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(micrometers) {
                    return micrometers / 1000;
                },
    
                /**
                * Converts Micrometers to Nanometers.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Nanometers.
                */
                toNanometers(micrometers) {
                    return micrometers * 1000;
                },
    
                /**
                * Converts Micrometers to Miles.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Miles.
                */
                toMiles(micrometers) {
                    return micrometers / 1609340000;
                },
    
                /**
                * Converts Micrometers to Yards.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Yards.
                */
                toYards(micrometers) {
                    return micrometers / 914400;
                },
    
                /**
                * Converts Micrometers to Feet.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Feet.
                */
                toFeet(micrometers) {
                    return micrometers / 304800;
                },
    
                /**
                * Converts Micrometers to Inches.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Inches.
                */
                toInches(micrometers) {
                    return micrometers / 25400;
                },
    
                /**
                * Converts Micrometers to Nautical Miles.
                * @param {number} micrometers - The number of Micrometers to be converted.
                * @return {number} - The equivalent number of Nautical Miles.
                */
                toInches(micrometers) {
                    return micrometers / 1.852e+9;
                }
            }, Nanometers: {
                /**
                 * Converts Nanometers to Meters.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(nanometers) {
                    return nanometers / 1000000000;
                },
    
                /**
                 * Converts Nanometers to Kilometers.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(nanometers) {
                    return nanometers / 1000000000000;
                },
    
                /**
                 * Converts Nanometers to Centimeters.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(nanometers) {
                    return nanometers / 10000000;
                },
    
                /**
                 * Converts Nanometers to Millimeters.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(nanometers) {
                    return nanometers / 1000000;
                },
    
                /**
                 * Converts Nanometers to Micrometers.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Micrometers.
                 */
                toMicrometers(nanometers) {
                    return nanometers / 1000;
                },
    
                /**
                 * Converts Nanometers to Miles.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Miles.
                 */
                toMiles(nanometers) {
                    return nanometers / 1609000000000;
                },
    
                /**
                 * Converts Nanometers to Yards.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Yards.
                 */
                toYards(nanometers) {
                    return nanometers / 914400000;
                },
    
                /**
                 * Converts Nanometers to Feet.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Feet.
                 */
                toFeet(nanometers) {
                    return nanometers / 304800000;
                },
    
                /**
                 * Converts Nanometers to Inches.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Inches.
                 */
                toInches(nanometers) {
                    return nanometers / 25400000;
                },
    
                /**
                 * Converts Nanometers to Nautical Miles.
                 * @param {number} nanometers - The number of Nanometers to be converted.
                 * @return {number} - The equivalent number of Nautical Miles.
                 */
                toNauticalMiles(nanometers) {
                    return nanometers / 1.852e+12;
                }
            }, Miles: {
                /**
                 * Converts Miles to Meters.
                 * @param {number} miles - The number of Miles to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(miles) {
                    return miles * 1609.344;
                },
    
                /**
                 * Converts Miles to Kilometers.
                 * @param {number} miles - The number of Miles to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(miles) {
                    return miles * 1.60934;
                },
    
                /**
                 * Converts Miles to Centimeters.
                 * @param {number} miles - The number of Miles to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(miles) {
                    return miles * 160934.4;
                },
    
                /**
                 * Converts Miles to Millimeters.
                 * @param {number} miles - The number of Miles to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(miles) {
                    return miles * 1609344;
                },
    
                /**
                * Converts Miles to Micrometers.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Micrometers.
                */
                toMicrometers(miles) {
                    return miles * 1609344000;
                },
    
                /**
                * Converts Miles to Nanometers.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Nanometers.
                */
                toNanometers(miles) {
                    return miles * 1609344000000;
                },
    
                /**
                * Converts Miles to Yards.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Yards.
                */
                toYards(miles) {
                    return miles * 1760;
                },
    
                /**
                * Converts Miles to Feet.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Feet.
                */
                toFeet(miles) {
                    return miles * 5280;
                },
    
                /**
                * Converts Miles to Inches.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Inches.
                */
                toInches(miles) {
                    return miles * 63360;
                },
    
                /**
                * Converts Miles to Nautical Miles.
                * @param {number} miles - The number of Miles to be converted.
                * @return {number} - The equivalent number of Nautical Miles.
                */
                toNauticalMiles(miles) {
                    return miles * 0.868976242;
                }
            }, Yards: {
                /**
                 * Converts Yards to Meters.
                 * @param {number} yards - The number of Yards to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(yards) {
                    return yards * 0.9144;
                },
    
                /**
                 * Converts Yards to Kilometers.
                 * @param {number} yards - The number of Yards to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(yards) {
                    return yards / 1093.6132983;
                },
    
                /**
                 * Converts Yards to Centimeters.
                 * @param {number} yards - The number of Yards to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(yards) {
                    return yards * 91.44;
                },
    
                /**
                 * Converts Yards to Millimeters.
                 * @param {number} yards - The number of Yards to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(yards) {
                    return yards * 914.4;
                },
    
                /**
                * Converts Yards to Micrometers.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Micrometers.
                */
                toMicrometers(yards) {
                    return yards * 914400;
                },
    
                /**
                * Converts Yards to Nanometers.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Nanometers.
                */
                toNanometers(yards) {
                    return yards * 914400000;
                },
    
                /**
                * Converts Yards to Miles.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Miles.
                */
                toMiles(yards) {
                    return yards / 1760;
                },
    
                /**
                * Converts Yards to Feet.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Feet.
                */
                toFeet(yards) {
                    return yards * 3;
                },
    
                /**
                * Converts Yards to Inches.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Inches.
                */
                toInches(yards) {
                    return yards * 36;
                },
    
                /**
                * Converts Yards to Nautical Miles.
                * @param {number} yards - The number of Yards to be converted.
                * @return {number} - The equivalent number of Nautical Miles.
                */
                toNauticalMiles(yards) {
                    return yards / 2025.371828;
                }
            }, Feet: {
                /**
                 * Converts Feet to Meters.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(feet) {
                    return feet / 3.2808;
                },
    
                /**
                 * Converts Feet to Kilometers.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(feet) {
                    return feet / 3280.8;
                },
    
                /**
                 * Converts Feet to Centimeters.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(feet) {
                    return feet * 30.48;
                },
    
                /**
                 * Converts Feet to Millimeters.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(feet) {
                    return feet * 304.8;
                },
    
                /**
                 * Converts Feet to Micrometers.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Micrometers.
                 */
                toMicrometers(feet) {
                    return feet * 304800000;
                },
    
                /**
                 * Converts Feet to Nanometers.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Nanometers.
                 */
                toNanometers(feet) {
                    return feet * 304800000000;
                },
    
                /**
                 * Converts Feet to Miles.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Miles.
                 */
                toMiles(feet) {
                    return feet / 5280;
                },
    
                /**
                 * Converts Feet to Yards.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Yards.
                 */
                toYards(feet) {
                    return feet / 3;
                },
    
                /**
                 * Converts Feet to Inches.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Inches.
                 */
                toInches(feet) {
                    return feet * 12;
                },
    
                /**
                 * Converts Feet to Nautical Miles.
                 * @param {number} feet - The number of Feet to be converted.
                 * @return {number} - The equivalent number of Nautical Miles.
                 */
                toNauticalMiles(feet) {
                    return feet / 6076.12;
                }
            }, Inches: {
                /**
                 * Converts Inches to Meters.
                 * @param {number} inches - The number of Inches to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(inches) {
                    return inches * 0.0254;
                },
    
                /**
                 * Converts Inches to Kilometers.
                 * @param {number} inches - The number of Inches to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(inches) {
                    return inches * 0.0000254;
                },
    
                /**
                 * Converts Inches to Centimeters.
                 * @param {number} inches - The number of Inches to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(inches) {
                    return inches * 2.54;
                },
    
                /**
                 * Converts Inches to Millimeters.
                 * @param {number} inches - The number of Inches to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(inches) {
                    return inches * 25.4;
                },
    
                /**
                * Converts Inches to Micrometers.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Micrometers.
                */
                toMicrometers(inches) {
                    return inches * 25400;
                },
    
                /**
                * Converts Inches to Nanometers.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Nanometers.
                */
                toNanometers(inches) {
                    return inches * 25400000;
                },
    
                /**
                * Converts Inches to Miles.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Miles.
                */
                toMiles(inches) {
                    return inches / 63360;
                },
    
                /**
                * Converts Inches to Yards.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Yards.
                */
                toYards(inches) {
                    return inches / 36;
                },
    
                /**
                * Converts Inches to Feet.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Feet.
                */
                toFeet(inches) {
                    return inches / 12;
                },
    
                /**
                * Converts Inches to Nautical Miles.
                * @param {number} inches - The number of Inches to be converted.
                * @return {number} - The equivalent number of Nautical Miles.
                */
                toNauticalMiles(inches) {
                    return inches / 72913.3858;
                }
            }, NauticalMiles: {
                /**
                 * Converts Nautical Miles to Meters.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Meters.
                 */
                toMeters(nauticalMiles) {
                    return nauticalMiles * 1852;
                },
    
                /**
                 * Converts Nautical Miles to Kilometers.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Kilometers.
                 */
                toKilometers(nauticalMiles) {
                    return nauticalMiles * 1.852;
                },
    
                /**
                 * Converts Nautical Miles to Centimeters.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Centimeters.
                 */
                toCentimeters(nauticalMiles) {
                    return nauticalMiles * 185200;
                },
    
                /**
                 * Converts Nautical Miles to Millimeters.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Millimeters.
                 */
                toMillimeters(nauticalMiles) {
                    return nauticalMiles * 18520000;
                },
    
                /**
                 * Converts Nautical Miles to Micrometers.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Micrometers.
                 */
                toMicrometers(nauticalMiles) {
                    return nauticalMiles * 18520000000;
                },
    
                /**
                 * Converts Nautical Miles to Nanometers.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Nanometers.
                 */
                toNanometers(nauticalMiles) {
                    return nauticalMiles * 18520000000000;
                },
    
                /**
                 * Converts Nautical Miles to Miles.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Miles.
                 */
                toMiles(nauticalMiles) {
                    return nauticalMiles * 1.15078;
                },
    
                /**
                 * Converts Nautical Miles to Yards.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Yards.
                 */
                toYards(nauticalMiles) {
                    return nauticalMiles * 2026.4;
                },
    
                /**
                 * Converts Nautical Miles to Feet.
                 * @param {number} nauticalMiles - The number of Nautical Miles to be converted.
                 * @return {number} - The equivalent number of Feet.
                 */
                toFeet(nauticalMiles) {
                    return nauticalMiles * 6076;
                }
            }
        },
    },

    Math: {
        /**
        * 
        */
        ceil(number) {
            return Math.ceil(number);
        },
    
        /**
        * 
        */
        floor(number) {
            return Math.floor(number);
        },
    
        /**
        * 
        */
        round(number, decimals = 2) {
            return Number(Math.round(number + 'e' + decimals) + 'e-' + decimals);
        },
    
        /**
        * Returns the absolute value of a number.
        * @param {number} num - The number to find the absolute value of.
        * @return {number} - The absolute value of the number.
        */
        abs(num) {
            // In case `num === -0`:
            if (num === 0) {
                return 0;
            }
    
            return num < 0 ? num * -1 : num * 1;
        },
    
        /**
        * Returns the square root of a number.
        * @param {number} num - The number to find the square root of.
        * @return {number} - The square root of the number.
        */
        sqrt(num) {
            return num ** 0.5;
        },
    
        /**
        * Returns the value of a number raised to a power.
        * @param {number} base - The base number.
        * @param {number} exponent - The exponent to raise the base to.
        * @return {number} - The value of the base raised to the exponent.
        */
        pow(base, exponent) {
            return base ** exponent;
        },
    
        /**
        * Returns the maximum of a list of numbers.
        * @param {Array<number>} numbers - The list of numbers to find the maximum of.
        * @return {number} - The maximum value in the list.
        */
        max(...numbers) {
            return Math.max(...numbers);
        },
    
        /**
        * Returns the minimum of a list of numbers.
        * @param {Array<number>} numbers - The list of numbers to find the maximum of.
        * @return {number} - The minimum value in the list.
        */
        max(...numbers) {
            return Math.max(...numbers);
        },
    
        /**
        * Returns the mean of a list of numbers.
        * @param {Array} nums - The list of numbers to find the mean of.
        * @return {number} - The mean of the numbers in the list.
        */
        mean(nums) {
            let sum = 0;
            for (let num of nums) {
                sum += num;
            }
            return sum / nums.length;
        },
    
        /**
        * Returns the median of a list of numbers.
        * @param {Array} nums - The list of numbers to find the median of.
        * @return {number} - The median of the numbers in the list.
        */
        median(nums) {
            nums.sort((a, b) => a - b);
            const mid = Math.floor(nums.length / 2);
            return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
        },
    
        /**
        * Returns the mode of a list of numbers.
        * @param {Array} nums - The list of numbers to find the mode of.
        * @return {Array} - The mode of the numbers in the list.
        */
        mode(nums) {
            const numCounts = {};
            let maxCount = 0;
            for (let num of nums) {
                if (numCounts[num]) {
                    numCounts[num]++;
                } else {
                    numCounts[num] = 1;
                }
                if (numCounts[num] > maxCount) {
                    maxCount = numCounts[num];
                }
            }
            return Object.keys(numCounts).filter(key => numCounts[key] === maxCount);
        },
    
        /**
        * Returns the range of a list of numbers.
        * @param {Array} nums - The list of numbers to find the range of.
        * @return {number} - The range of the numbers in the list.
        */
        range(nums) {
            let max = nums[0];
            let min = nums[0];
            for (let num of nums) {
                if (num > max) {
                    max = num;
                }
                if (num < min) {
                    min = num;
                }
            }
            return max - min;
        },
    
        /**
        * Returns the sum of a list of numbers.
        * @param {Array} nums - The list of numbers to find the sum of.
        * @return {number} - The sum of the numbers in the list.
        */
        sum(nums) {
            let total = 0;
            for (let num of nums) {
                total += num;
            }
            return total;
        },
    
        /**
        * Returns the product of a list of numbers.
        * @param {Array} nums - The list of numbers to find the product of.
        * @return {number} - The product of the numbers in the list.
        */
        product(nums) {
            let total = 1;
            for (let num of nums) {
                total *= num;
            }
            return total;
        },
    
        /**
        * Returns the factorial of a number.
        * @param {number} num - The number to find the factorial of.
        * @return {number} - The factorial of the number.
        */
        factorial(num) {
            let total = 1;
            for (let i = 1; i <= num; i++) {
                total *= i;
            }
            return total;
        },
    
        /**
        * Returns the power of a number.
        * @param {number} base - The base number.
        * @param {number} exponent - The exponent to raise the base to.
        * @return {number} - The result of raising the base to the exponent.
        */
        power(base, exponent) {
            let total = 1;
            for (let i = 0; i < exponent; i++) {
                total *= base;
            }
            return total;
        },
    },

    Random: {
        /**
         * Returns a random number between 0, and 1 (exclusive)
         */
        random() {
            let rnd = Math.cos(performance.now()) * 10000;
            return rnd - Math.floor(rnd);
        },
    
        /**
         * Returns a random number between `min` and `max` (exclusive)
         */
        randRange(min, max) {
            return Math.floor(min + this.random() * (max - min));
        },
    
        /**
         * Returns a random number between `min` and `max` (inclusive)
         */
        randInt(min, max) {
            return Math.floor(min + this.random() * (max - min + 1));
        },
    
        /**
         * Returns a random boolean value (either `true` or `false`)
         */
        randBool() {
            return Math.round(this.random()) < 0.5;
        },
    
        /**
         * Returns a random element from the provided array
         */
        randChoice(array) {
            return array[this.randInt(0, array.length - 1)];
        },
    
        /**
         * Returns `k` elements from the provided array (randomly)
         */
        randChoices(array, k) {
            let choices = [];
            for (let i = 0; i < k; i++) {
                choices.push(this.randChoice(array));
            }
    
            return choices;
        },
    
        /**
         * Returns a random HEX color (eg. "#AF93EL")
         */
        randHex(includePound = true) {
            let hex = "";
            for (let i = 0; i < 6; i++) {
                hex += this.randInt(0, 15).toString(16);
            }
    
            return includePound ? "#" + hex : hex;
        },
    
        /**
         * Shuffles an array in place
         * @param {Array} array - the array to shuffle
         */
        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(this.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    },

    /**
     * Easily manipulate strings:
     */
    Strings: {
        /**
         * Return a capitalized version of the string.
         * 
         * More specifically, make the first character have upper case and the rest lower case.
         * 
         * @param {string} string - The input string to be capitalized
         * @returns {string} The capitalized string
         */
        capitalize(string) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Return a version of the string suitable for caseless comparisons
         * 
         * This function returns a case-normalized string, by converting all uppercase characters to their lowercase equivalent.
         * 
         * @param {string} string - The input string to be case-normalized
         * @returns {string} The case-normalized string
         */
        casefold(string) {
            return string.toLowerCase();
        },

        /**
         * Return a centered string of length width.
         * 
         * Padding is done using the specified fill character (default is a space).
         * 
         * @param {string} string - The input string to be centered
         * @param {number} width - The desired width of the output string
         * @param {string} [fillchar=" "] - The character used for padding (default is a space)
         * @returns {string} The centered string
         */
        width(string, width, fillchar = " ") {
            let strLength = str.length;
            let padding = width - strLength;
            let leftPadding = Math.floor(padding / 2);
            let rightPadding = padding - leftPadding;
            return fillchar.repeat(leftPadding) + str + fillchar.repeat(rightPadding);
        },

        /**
         * Return the number of occurrences of a substring within a string
         * 
         * @param {string} string - The input string to be searched
         * @param {string} subString - The substring to be searched for within the input string
         * @returns {number} The number of occurrences of `subString` within `string`
         */
        count(string, subString) {
            let count = 0;
            let index = string.indexOf(subString);
            while (index != -1) {
                count++;
                index = string.indexOf(subString, index + 1);
            }

            return count;
        },

        /**
         * Return True if the string ends with the specified suffix, False otherwise.
         * 
         * @param {string} string - The input string to be searched
         * @param {string} suffix - The suffix to be searched for within the input string
         * @returns {boolean} True if `string` ends with `suffix`, False otherwise
         */
        endsWith(string, suffix) {
            return string.slice(string.length - suffix.length) === suffix;
        },

        /**
         * 
         */
        startsWith(string, prefix) {
            return string.charAt(0, prefix.length) === prefix;
        },

        /**
         * Return the lowest index in S where subString sub is found, such that sub is contained within S[start:end]. Optional arguments start and end are interpreted as in slice notation.
         * 
         * Return -1 on failure
         */
        index(string, subString, start = 0, end = -1) {
            if (end === -1) {
                end = string.length;
            }

            let slice = string.slice(start, end);
            return slice.indexOf(subString);
        },

        /**
         * Formats `string` with positional or named placeholders
         */
        format(string, ...args) {
            let i = 0;
            return string.replace(/{}/g, () => args[i++]);
        },


        /**
         * Return True if the string is an alpha-numeric string, False otherwise.
         * 
         * A string is alpha-numeric if all characters in the string are alpha-numeric and there is at least one character in the string
         * 
         * RegEx: `[a-zA-Z0-9]`
         */
        isAlphaNumeric(string) {
            return /^[a-zA-Z0-9]+$/.test(string);
        },

        /**
         * Return True if the string only contains alphabetic characters, False otherwise.
         * 
         * A string is considered alphabetic if all characters in the string are alphabetic and there is at least one character in the string.
         * 
         * RegEx: `[a-zA-Z]`
         */
        isAlpha(string) {
            return /^[a-zA-Z]+$/.test(string);
        },

        /**
         * Return True if the string only contains ASCII characters, False otherwise.
         * 
         * RegEx: `[\x00-\x7F]`
         */
        isASCII(string) {
            return /^[\x00-\x7F]+$/.test(string);
        },

        /**
         * Return True if the string only contains decimal digits, False otherwise.
         * 
         * RegEx: `[0-9]`
         */
        isDecimal(string) {
            return /^[0-9]+$/.test(string);
        },

        /**
         * Return True if the string only contains digits, False otherwise.
         * 
         * RegEx: `\d`
         */
        isDigit(string) {
            return /^\d+$/.test(string);
        },

        /**
         * Return True if the string is a valid Python identifier, False otherwise.
         * 
         * RegEx: `^[a-zA-Z_$][a-zA-Z_$0-9]*$`
         */
        isIdentifier(string) {
            return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(string);
        },

        /**
         * Return True if the string only contains lowercase letters, False otherwise.
         * 
         * RegEx: `[a-z]`
         */
        isLower(string) {
            return /^[a-z]+$/.test(string);
        },

        /**
         * Return True if the string only contains uppercase letters, False otherwise.
         * 
         * RegEx: `[A-Z]`
         */
        isUpper(string) {
            return /^[A-Z]+$/.test(string);
        },

        /**
         * Return True if the string only contains numeric characters, False otherwise.
         * 
         * RegEx: `[0-9]`
         */
        isNumeric(string) {
            return /^[0-9]+$/.test(string);
        },

        /**
         * 
         */
        isPrintable(string) {
            return /^[\x20-\x7E]+$/.test(str);
        },

        /**
         * 
         */
        isSpace(string) {
            return /^\s+$/.test(str);
        },

        /**
         * 
         */
        isTitle(string) {
            return string === string.split(' ').map(function (word) {
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            }).join(' ');
        },

        /**
         * 
         */
        join(string, array) {
            return array.join(string);
        },

        /**
         * 
         */
        toLowerCase(string) {
            return string.toLowerCase();
        },

        /**
         * 
         */
        toUpperCase(string) {
            return string.toLowerCase();
        },

        /**
         * 
         */
        toTitleCase(string) {
            return string.toLowerCase().split(" ").map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(" ");
        },

        /**
         * 
         */
        toTitleCaseMLA(string) {
            const mlaExceptions = ["a", "an", "and", "the", "at", "by", "for", "in", "of", "on", "or", "to", "with"];
            return string.toLowerCase().split(" ").map(word => {
                if (mlaExceptions.indexOf(word) === -1 && word.length > 3) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                } else {
                    return word;
                }
            }).join(" ");
        },

        /**
         * 
         */
        toTitleCaseAPA(string) {
            const apaExceptions = ["a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "so", "the", "to", "up", "yet"];
            return string.toLowerCase().split(" ").map((word, index) => {
                if (index === 0 || apaExceptions.indexOf(word) === -1) {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                } else {
                    return word;
                }
            }).join(" ");
        },

        /**
         * Removes `maxCount` occurrences of `subString`
         */
        removeSubString(string, subString, maxCount) {
            let count = 0;
            while (string.indexOf(subString) !== -1 && count < maxCount) {
                string = string.replace(subString, "");
                count++;
            }
            return string;
        },

        /**
         * 
         */
        removePrefix(string, prefix, caseSensitive = true) {
            if (caseSensitive === true ? string.slice(0, prefix.length) === prefix : string.slice(0, prefix.length).toLowerCase() === prefix.toLowerCase()) {
                return string.slice(prefix.length);
            }

            return string;
        },

        /**
         * 
         */
        removeSuffix(string, suffix, caseSensitive = true) {
            if (caseSensitive === true ? string.slice(-suffix.length) === suffix : string.slice(-suffix.length).toLowerCase() === suffix.toLowerCase()) {
                return string.slice(0, -suffix.length);
            }

            return string;
        },

        /**
         * 
         */
        replace(string, subString, replaceWith, maxReplace = -1, caseSensitive = true) {
            let count = 0;
            let newString = string;

            if (!caseSensitive) {
                string = string.toLowerCase();
                subString = subString.toLowerCase();
            }

            while (newString.indexOf(subString) !== -1 && (maxReplace === -1 || count < maxReplace)) {
                newString = newString.replace(subString, replaceWith);
                count++;
            }

            return newString;
        },

        /**
         * 
         */
        split(string, separator, maxSplit = -1) {
            let splitArray = [];
            let currentSplit = 0;

            while (string.indexOf(separator) !== -1 && (maxSplit === -1 || currentSplit < maxSplit)) {
                let separatorIndex = string.indexOf(separator);
                splitArray.push(string.slice(0, separatorIndex));
                string = string.slice(separatorIndex + separator.length);
                currentSplit++;
            }

            splitArray.push(string);

            return splitArray;
        },

        /**
         * 
         */
        splitLines(string, maxSplit) {
            let splitArray = [];
            let currentSplit = 0;

            while (string.indexOf('\n') !== -1 && (maxSplit === -1 || currentSplit < maxSplit)) {
                let separatorIndex = string.indexOf('\n');
                splitArray.push(string.slice(0, separatorIndex));
                string = string.slice(separatorIndex + 1);
                currentSplit++;
            }

            splitArray.push(string);

            return splitArray;
        },

        /**
         * 
         */
        strip(string, chars = [" "]) {
            let start = 0;
            let end = string.length - 1;

            while (chars.includes(string[start])) {
                start++;
            }

            while (chars.includes(string[end])) {
                end--;
            }

            return string.slice(start, end + 1);
        },

        /**
         * 
         */
        swapCase(string) {
            let result = "";
            for (let i = 0; i < string.length; i++) {
                let char = string[i];
                if (char === char.toUpperCase()) {
                    result += char.toLowerCase();
                } else if (char === char.toLowerCase()) {
                    result += char.toUpperCase();
                } else {
                    result += char;
                }
            }
            return result;
        },

        /**
         * 
         */
        zFill(string, width) {
            let result = string;
            while (result.length < width) {
                result = "0" + result;
            }
            return result;
        }
    },

    /**
     * Validate specific strings
     */
    Validation: {
        /**
         * Checks if a string is a valid email address.
         * @param {string} email - The string to be checked as an email address.
         * @return {boolean} - Returns `true` if the email is valid, `false` otherwise.
         */
        isEmail(email) {
            // Check if the email parameter is a string type.
            if (typeof email !== 'string') {
                return false;
            }

            // Use a regular expression to check if the email is in the correct format.
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(email);
        },

        /**
         * Checks if a string is a valid URL.
         * @param {string} URL - The string to be checked as a URL.
         * @return {boolean} - Returns `true` if the URL is valid, `false` otherwise.
         */
        isURL(URL) {
            // Check if the URL parameter is a string type.
            if (typeof URL !== 'string') {
                return false;
            }

            // Use a regular expression to check if the URL is in the correct format.
            const URLRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            return URLRegex.test(URL);
        },

        /**
         * Checks if a string is a valid IPv4 address.
         * @param {string} IPv4 - The string to be checked as an IPv4 address.
         * @return {boolean} - Returns `true` if the IPv4 address is valid, `false` otherwise.
         */
        isIPv4(IPv4) {
            // Check if the IPv4 parameter is a string type.
            if (typeof IPv4 !== 'string') {
                return false;
            }

            // Use a regular expression to check if the IPv4 address is in the correct format.
            const IPv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            return IPv4Regex.test(IPv4);
        },

        /**
         * 
         */
        isIPv6(IPv6) {
            return /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(IPv6);
        },

        /**
        * Validates if a string is a valid phone number.
        * @param {string} phoneNumber - The string to be validated as a phone number.
        * @return {boolean} - Returns `true` if the phone number is valid, `false` otherwise.
        */
        isPhoneNumber(phoneNumber) {
            // Use a regular expression to check if the phone number is in the correct format
            const phoneNumberRegex = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
            return phoneNumberRegex.test(phoneNumber);
        },

        /**
        * Validates if a string is a valid credit card number.
        * @param {string} creditCardNumber - The string to be validated as a credit card number.
        * @return {boolean} - Returns `true` if the credit card number is valid, `false` otherwise.
        */
        isCreditCardNumber(creditCardNumber) {
            // Use a regular expression to check if the credit card number is in the correct format
            const creditCardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
            return creditCardNumberRegex.test(creditCardNumber);
        },

        /**
        * Validates if a string only contains alphabetical characters.
        * @param {string} string - The string to be validated as only containing alphabetical characters.
        * @return {boolean} - Returns `true` if the string only contains alphabetical characters, `false` otherwise.
        */
        isAlpha(string) {
            // Use a regular expression to check if the string only contains alphabetical characters
            const alphaRegex = /^[A-Za-z]+$/;
            return alphaRegex.test(string);
        },

        /**
        * Validates if a string only contains alphabetical or numeric characters.
        * @param {string} string - The string to be validated as only containing alphabetical or numeric characters.
        * @return {boolean} - Returns `true` if the string only contains alphabetical or numeric characters, `false` otherwise.
        */
        isAlphaNumeric(string) {
            // Use a regular expression to check if the string only contains alphabetical or numeric characters
            const alphaNumericRegex = /^[A-Za-z0-9]+$/;
            return alphaNumericRegex.test(string);
        },

        /**
         * Checks if a value is a valid number.
         * @param {number} number - The value to be checked as a number.
         * @return {boolean} - Returns `true` if the value is a valid number, `false` otherwise.
         */
        isNumeric(number) {
            return typeof number === 'number' && !isNaN(number);
        },

        /**
         * Checks if a string is a valid date.
         * @param {string} date - The string to be checked as a date.
         * @return {boolean} - Returns `true` if the date is valid, `false` otherwise.
         */
        isDate(date) {
            return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
        },

        /**
         * Checks if a string is a valid time.
         * @param {string} time - The string to be checked as a time.
         * @return {boolean} - Returns `true` if the time is valid, `false` otherwise.
         */
        isTime(time) {
            let regEx = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
            return regEx.test(time);
        },

        /**
         * Checks if a string is a valid date and time.
         * @param {string} dateTime - The string to be checked as a date and time.
         * @return {boolean} - Returns `true` if the date and time is valid, `false` otherwise.
         */
        isDateTime(dateTime) {
            let regEx = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/i;
            return regEx.test(dateTime);
        }
    },

    Dialog: {
        /**
         * Logs a message at the bottom right of the user's screen
         * 
         * @param {string} message The message that will be shown on the dialog
         * @param {string} type Either: "INFO", "ERROR", or "WARNING"
         * @param {boolean} sticky When `true`, the log will never disappear (unless clicked by user)
         */
        logMessage(message, type = "INFO", sticky = false) {
            // Remove previous boxes:
            let boxes = document.getElementsByClassName("log\:log-box");
            while (boxes.length !== 0) {
                boxes[0].remove();
            }
    
            // Create info box:
            let infoBox = document.createElement("div");
            infoBox.classList.add("log:log-box");
            infoBox.innerHTML = message;
    
            // Change info box type:
            if (type === "INFO") {
                infoBox.classList.add("log\:info-log");
            } else if (type === "ERROR") {
                infoBox.classList.add("log\:error-log");
            } else if (type === "WARNING") {
                infoBox.classList.add("log\:warning-log");
            } else {
                if (type) {
                    throw `Unknown Info Type: "${type}"`;
                }
            }
    
            // Remove info box on click:
            infoBox.addEventListener("click", function () {
                infoBox.classList.add("hidden");
                setTimeout(function () {
                    infoBox.remove();
                }, 300);
            })
    
            // Add info box to body:
            document.body.appendChild(infoBox);
    
            // Remove info box after 7 seconds:
            if (!sticky) {
                setTimeout(function () {
                    infoBox.classList.add("hidden");
                    setTimeout(function () {
                        infoBox.remove();
                    }, 300)
                }, 7000);
            }
        },
        /**
         * Removes any logged messages from the screen
         */
        clearMessages() {
            let infoBox = document.querySelector(".log\\:log-box");
            if (infoBox) {
                infoBox.classList.add("hidden");
                setTimeout(function() {
                    infoBox.remove();
                }, 300);
            }
        }
    },

    /**
     * Docs Framework: A bunch of UI elements used to create articles, courses, etc
     */
    Docs: DocsAPI,

    DOM: {
        /**
         * Checks whether a an element is visible
        */
        isVisible: (element) => {
            let rect = element.getBoundingClientRect();

            return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        }
    }
};