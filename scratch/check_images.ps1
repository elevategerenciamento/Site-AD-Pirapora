Add-Type -AssemblyName System.Drawing
$dir = "c:\Users\PV\Downloads\SITE AD PIRAPORA\public\DIRETORIA"
Get-ChildItem $dir | ForEach-Object {
    $img = [System.Drawing.Image]::FromFile($_.FullName)
    $name = $_.Name
    $w = $img.Width
    $h = $img.Height
    $kb = [math]::Round($_.Length / 1024)
    $img.Dispose()
    Write-Host "$name -> ${w}x${h} (${kb}KB)"
}
