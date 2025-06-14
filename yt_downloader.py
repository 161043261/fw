#  pip install yt-dlp
from yt_dlp import YoutubeDL

URLS = ["https://www.youtube.com/watch?v=kJy7LF789lo"]

with YoutubeDL() as ydl:
    ydl.download(URLS)

print("yt_downloader Done!")
