import os
from moviepy.editor import VideoFileClip
from PIL import Image
import shutil

def compress_video(input_file, output_file, codec='libx264', bitrate='800k'):
    """Compress and save a video file."""
    video = VideoFileClip(input_file)
    video.write_videofile(output_file, codec=codec, bitrate=bitrate)

def compress_image(input_file, output_file, quality=85):
    """Compress an image file."""
    with Image.open(input_file) as img:
        # Save the image with the specified quality (no rotation)
        img.save(output_file, optimize=True, quality=quality)

def process_files(directory, output_directory):
    """Process all video and image files in the given directory."""
    for root, _, files in os.walk(directory):
        # Determine the relative path to create the same structure in the output directory
        rel_path = os.path.relpath(root, directory)
        current_output_directory = os.path.join(output_directory, rel_path)

        # Create the corresponding directory in the output path
        os.makedirs(current_output_directory, exist_ok=True)

        for filename in files:
            input_path = os.path.join(root, filename)
            output_path = os.path.join(current_output_directory, filename)

            # Process video files
            if filename.lower().endswith(('.mp4', '.avi', '.mov', '.mkv')):
                print(f'Compressing video: {input_path} to {output_path}')
                compress_video(input_path, output_path)

            # Process image files
            elif filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                print(f'Compressing image: {input_path} to {output_path}')
                compress_image(input_path, output_path)

            # Copy non-compressible files
            else:
                print(f'Copying non-compressible file: {input_path} to {output_path}')
                shutil.copy2(input_path, output_path)

def main():
    # Specify the source directory and output directory
    source_directory = './'  # Current directory
    output_directory = os.path.join(source_directory, 'compressed')

    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    # Process files in the specified directory
    process_files(source_directory, output_directory)

if __name__ == "__main__":
    main()

