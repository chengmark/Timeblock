import cv2
import numpy as np


def get_hex_code(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])


# Load the image file
img = cv2.imread('input.png')

# Convert the image to RGB color space
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Reshape the image to a 2D array of pixels and 3 color values (RGB)
pixels = img.reshape((-1, 3))

# Convert the pixel values to uint8 (0-255)
pixels = np.uint8(pixels)

# Get all unique colors in the image and their counts
unique_colors, counts = np.unique(pixels, axis=0, return_counts=True)

# Filter out colors that appear less than the threshold value
count_threshold = 10
unique_colors = unique_colors[counts >= count_threshold]
counts = counts[counts >= count_threshold]

# Filter out colors that are very similar to each other
similarity_threshold = 250
to_remove = []
for i in range(len(unique_colors)):
    for j in range(i+1, len(unique_colors)):
        dist = np.linalg.norm(unique_colors[i] - unique_colors[j])
        if dist < similarity_threshold:
            to_remove.append(j)
unique_colors = np.delete(unique_colors, to_remove, axis=0)
counts = np.delete(counts, to_remove)

# Limit the number of colors displayed to the max_count variable
max_count = 10
if len(unique_colors) > max_count:
    indices = np.argsort(counts)[::-1][:max_count]
    unique_colors = unique_colors[indices]
    counts = counts[indices]

# Create a square grid to display the colors
n_cols = min(5, len(unique_colors))
n_rows = (len(unique_colors) - 1) // n_cols + 1
grid_size = 100
grid = np.zeros((n_rows * grid_size, n_cols * grid_size, 3), dtype=np.uint8)

# Display the colors with their hex codes and counts in the grid
for i, (color, count) in enumerate(zip(unique_colors, counts)):
    hex_code = get_hex_code(color)
    # Create a square image of the color
    square = np.zeros((grid_size, grid_size, 3), dtype=np.uint8)
    square[:, :, :] = color
    # Compute the position of the color square in the grid
    row = i // n_cols
    col = i % n_cols
    x = col * grid_size + (grid_size - square.shape[1]) // 2
    y = row * grid_size + (grid_size - square.shape[0]) // 2
    # Add the color square to the grid and display the hex code and count
    grid[y:y+square.shape[0], x:x+square.shape[1], :] = square
    cv2.putText(grid, f"{hex_code} ({count})", (x, y+grid_size+20),
                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)

# Display the grid of colors
cv2.imshow('Color Palette', grid)

# Wait for a key press and then close the window
cv2.waitKey(0)
cv2.destroyAllWindows()
