
source ~/.bash_profile
# 檢查 Node.js 版本 18 是否已安装
if nvm ls 18 &> /dev/null
then
    echo "Node.js version 18 is already installed."
else
    echo "Installing Node.js version 18."
    nvm install 18
fi

# 取得當前 Node.js 版本
current_version=$(nvm current)

# 檢查 Node.js 版本 是否在 18
# 检查当前版本是否为 18
if [[ $current_version == v18* ]]
then
    echo "Already using Node.js version 18."
else
    echo "Switching to Node.js version 18..."
    nvm use 18
fi

# 檢查是否有 node_modules
if [ -d "node_modules" ]
then
echo "Removing node_modules..."
rm -rf node_modules
else
echo "node_modules does not exist. Skipping removal."
fi

# 安装套件包
echo "Installing dependencies..."
bun install

# 啟動伺服器
echo "Starting development server..."
bun dev
