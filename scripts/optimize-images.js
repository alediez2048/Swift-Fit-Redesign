const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, 'src/assets/images');

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    // 1. Optimize the poster/team image (webp compression)
    const teamImagePath = path.join(assetsDir, 'Swift_Fit_Picture_Day_92_0e0ecbeeb9.webp');
    if (fs.existsSync(teamImagePath)) {
        const originalSize = fs.statSync(teamImagePath).size;
        await sharp(teamImagePath)
            .resize(1200, 900, { fit: 'cover' }) // Resize to reasonable dimensions
            .webp({ quality: 75 }) // Compress
            .toFile(path.join(assetsDir, 'Swift_Fit_Picture_Day_92_optimized.webp'));

        // Replace original
        fs.unlinkSync(teamImagePath);
        fs.renameSync(
            path.join(assetsDir, 'Swift_Fit_Picture_Day_92_optimized.webp'),
            teamImagePath
        );
        const newSize = fs.statSync(teamImagePath).size;
        console.log(`✅ Team image: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB`);
    }

    // 2. Optimize the logo (convert to webp, resize)
    const logoPath = path.join(assetsDir, 'Gemini_Generated_Image_h2x1h5h2x1h5h2x1.png');
    const logoWebpPath = path.join(assetsDir, 'Gemini_Generated_Image_h2x1h5h2x1h5h2x1.webp');
    if (fs.existsSync(logoPath)) {
        const originalSize = fs.statSync(logoPath).size;
        await sharp(logoPath)
            .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .webp({ quality: 85 })
            .toFile(logoWebpPath);

        const newSize = fs.statSync(logoWebpPath).size;
        console.log(`✅ Logo: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (WebP)`);
    }

    // 3. Optimize the asterisk (resize, convert to webp)
    const asteriskPath = path.join(assetsDir, 'asterisk.png');
    const asteriskWebpPath = path.join(assetsDir, 'asterisk.webp');
    if (fs.existsSync(asteriskPath)) {
        const originalSize = fs.statSync(asteriskPath).size;
        await sharp(asteriskPath)
            .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .webp({ quality: 85 })
            .toFile(asteriskWebpPath);

        const newSize = fs.statSync(asteriskWebpPath).size;
        console.log(`✅ Asterisk: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (WebP)`);
    }

    console.log('\n🎉 Image optimization complete!');
    console.log('\n⚠️  Note: Logo and Asterisk are now WebP files.');
    console.log('   You may need to update imports in code if using .png extensions.');
}

optimizeImages().catch(console.error);
